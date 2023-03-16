import { EditorView } from "codemirror"
import { EditorState, Compartment } from "@codemirror/state"

import { javascript } from "@codemirror/lang-javascript"
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";

import { themes } from "./themes"
import { languages } from "./languages"

import {indentWithTab} from "@codemirror/commands"
//import { closeBrackets, closeBracketsKeymap } from "@codemirror/closebrackets";


import {defaultHighlightStyle, syntaxHighlighting, indentOnInput, bracketMatching,
        foldGutter, foldKeymap, indentUnit } from "@codemirror/language"

import {keymap, highlightSpecialChars, drawSelection, highlightActiveLine, dropCursor,
        rectangularSelection, crosshairCursor,
        lineNumbers, highlightActiveLineGutter, Decoration} from "@codemirror/view"

import { autocompletion, closeBrackets } from "@codemirror/autocomplete"

import { CursorWidget, addCursor, removeCursor, cursorExt } from "./cursor"
import { addAuthor, removeAuthor, authorExt } from "./author"

import ixora from '@retronav/ixora';

import {openSearchPanel, searchKeymap, highlightSelectionMatches} from "@codemirror/search"
/*
import {defaultKeymap, history, historyKeymap} from "@codemirror/commands"
import {lintKeymap} from "@codemirror/lint"


*/

import { cryptpadDark } from './themes/cryptpad-dark';
import { cryptpadLight } from './themes/cryptpad-light';


let language = new Compartment;
let tabSize = new Compartment;
let theme = new Compartment;
let brackets = new Compartment;
let indents = new Compartment;
let readOnly = new Compartment;
let sv = new Compartment;


let evTypes = {
    change: [],
    cursorActivity: []
};
let onChange = (data) => {
    evTypes.change.forEach((h) => {
        try { h(data); } catch (e) { console.error(e); }
    });
};
let onCursorUpdate = (data) => {
    evTypes.cursorActivity.forEach((h) => {
        try { h(data); } catch (e) { console.error(e); }
    });
};
let updateListenerExtension = EditorView.updateListener.of((update) => {
    if (update.docChanged) {
        if (onChange) { onChange(update); }
    }
    if (update.selectionSet) {
        if (onCursorUpdate) { onCursorUpdate(update); }
    }
});

/*
let domEventExtension = EditorView.domEventHandlers({
    paste: (ev) => {
    },
    drop: (ev) => {
    }
});
*/


let closeB = closeBrackets();
let md = languages.find((el) => {
    return el.id === 'gfm';
}) || languages[2];



window.CP_getLanguages = () => languages.slice();
window.CP_createEditor = (cfg) => {
    cfg = cfg || {};
    let classic = cfg.noNumber ? [[]] : [lineNumbers(), foldGutter()];
    let lastTheme = themes[2];
    let editor = new EditorView({
        state: EditorState.create({
            extensions: [
                sv.of(classic),

                cursorExt,
                authorExt,

                EditorView.lineWrapping,
                updateListenerExtension,

                highlightActiveLineGutter(),
                highlightSpecialChars(),
                drawSelection(),
                dropCursor(),
                EditorState.allowMultipleSelections.of(true),
                indentOnInput(),
                syntaxHighlighting(defaultHighlightStyle, {fallback: true}),


                highlightSelectionMatches(),


                keymap.of([indentWithTab].concat(searchKeymap)),
                indents.of(indentUnit.of('\t')),
                tabSize.of(EditorState.tabSize.of(8)),

                readOnly.of(EditorState.readOnly.of(true)),

                bracketMatching(),
                brackets.of([closeB]),
                //closeBracketsKeymap,
                autocompletion(),

                rectangularSelection(),
                crosshairCursor(),
                highlightActiveLine(),

                language.of([md.extension]),
                theme.of([lastTheme])
            ],
            doc: ''
        }),
    });

    editor.CP_setInline = (state, dark) => {
        editor.dispatch({ effects: sv.reconfigure([state ? [ixora] : classic]) });
        if (state) {
            editor.dispatch({ effects: theme.reconfigure([dark ? cryptpadDark : cryptpadLight]) });
        } else {
            editor.dispatch({ effects: theme.reconfigure([lastTheme]) });
        }
    };


    editor.CP_listThemes = () => themes.slice();
    editor.CP_setTheme = (id) => {
        let t = themes.find((el) => {
            return el.id === id;
        }) || themes[1];
        lastTheme = t;
        editor.dispatch({
            effects: theme.reconfigure([t])
        });
    };

    editor.CP_listLanguages = () => languages.slice();
    editor.CP_setLanguage = (id) => {
        let l = languages.find((el) => {
            return el.id === id;
        }) || languages[0];
        editor.dispatch({
            effects: language.reconfigure([l.extension])
        });
    };

    editor.CP_setIndent = (useTabs, unit) => {
        let unitStr = useTabs ? '\t' : new Array(unit + 1).join(' ');
        editor.dispatch({ effects: indents.reconfigure(indentUnit.of(unitStr)) });
        editor.dispatch({ effects: tabSize.reconfigure(EditorState.tabSize.of(unit)) });
    };
    editor.CP_setBrackets = (autoclose) => {
        editor.dispatch({ effects: brackets.reconfigure([autoclose ? closeB : []]) });
    };

    editor.CP_setReadOnly = (bool) => {
        editor.dispatch({ effects: readOnly.reconfigure(EditorState.readOnly.of(Boolean(bool))) });
    };

    editor.CP_on = (type, handler) => {
        if (!evTypes[type]) { return; }
        if (typeof(handler) !== "function") { return; }
        evTypes[type].push(handler);
    };
    editor.CP_off = (type, handler) => {
        if (!evTypes[type]) { return; }
        if (typeof(handler) !== "function") { return; }
        let idx = evTypes[type].indexOf(handler);
        if (idx !== -1) { evTypes[type].splice(idx, 1); }
    };

    editor.CP_addCursor = (color, title, id, pos, pos2) => {
        if (typeof(pos2) === "number") {
            if (pos2 < pos) {
                let _pos2 = pos2;
                pos2 = pos;
                pos = _pos2;
            }
            const mark = Decoration.mark({
                attributes: {
                    style: `background-color:${color}`,
                    id: id,
                    title: title,
                    'data-cptippy-html': 'true',
                    'class': 'cp-tippy-html'
                }
            });
            editor.dispatch({ effects: addCursor.of([mark.range(pos, pos2)]) });
            return;
        }
        const c = Decoration.widget({
            side: 1,
            widget: new CursorWidget(color, title, id),
        });
        editor.dispatch({ effects: addCursor.of([c.range(pos)]) });
    };

    editor.CP_removeCursors = (id) => {
        editor.dispatch({
            effects: removeCursor.of((from, to, c) => {
                // return false to remove a cursor
                if (id) {
                    return (c.widget && c.widget.id !== id) || (c.attrs && c.attrs.id !== id);
                }
                return false;
            })
        });
    };

    const getUid = () => {
        return Number(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)).toString(32).replace(/\./g, '');
    };
    editor.CP_addAuthor = (color, title, uid, inclusive, pos, pos2) => {
        const from = Math.max(Math.min(pos, pos2), 0); // can't be < 0
        const to = Math.min(Math.max(pos, pos2), editor.state.doc.length);
        const mark = Decoration.mark({
            inclusive: inclusive,
            attributes: {
                style: `background-color:${color}`,
                'data-uid': uid,
                title: title,
                'class': 'authortest'
            },
            'cm-uid': getUid()
        });
        editor.dispatch({ effects: addAuthor.of([mark.range(from, to)]) });
    };
    editor.CP_removeAuthors = () => { // Clear all
        editor.dispatch({
            effects: removeAuthor.of((from, to, c) => {
                return false;
            })
        });
    };
    editor.CP_removeAuthor = (mark) => { // Remove one mark
        editor.dispatch({
            effects: removeAuthor.of((from, to, c) => {
                let uid = mark.spec['cm-uid'];
                // return false to remove a cursor
                if (uid) { return c.spec && c.spec['cm-uid'] !== uid; }
                return true;
            })
        });
    };
    editor.CP_findAuthors = (from, to) => {
        let all = [];
        let range = authorExt.provides.value(editor.state);
        range.between(from, to, (f, t, value) => {
            if (f === to) { return; }
            if (t === from) { return; }
            all.push({
                from: f,
                to: t,
                attrs: value.attrs,
                value: value,
                clear: () =>  {
                    editor.CP_removeAuthor(value);
                }
            });
        });
        return all;
    };
    editor.CP_getAllAuthors = () => {
        return editor.CP_findAuthors(0, editor.state.doc.length);
    }

window.cmeditor = editor; // XXX remove

    return editor;
};
