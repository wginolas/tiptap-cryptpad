import { EditorView } from '@codemirror/view';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags } from '@lezer/highlight';

const chalky = "#e5c07b", coral = "#e06c75", cyan = "#56b6c2", invalid = "#ffffff", ivory = "#abb2bf", stone = "#7d8799", // Brightened compared to original to increase contrast
malibu = "#61afef", sage = "#98c379", whiskey = "#d19a66", violet = "#c678dd", darkBackground = "#21252b", highlightBackground = "#2c313a", tooltipBackground = "#353a42";

const text = '#f8f8f2';
const background = '#323232'; // 850, was 212121 in mockups but already used for CP background
const cursor = '#f8f8f0';
const gutters = '#6D8A88'; //'#282a36';
const selection = 'rgba(255, 255, 255, 0.20)';
const activeLine = 'rgba(255, 255, 255, 0.10)';

const panelsBg = darkBackground;
const panelsFg = ivory;


const ixoraCodeBg = "#424242"; // 800, was 323232 in mockups
const quoteText = '#9E9E9E'; // 500

/**
The editor theme styles for One Dark.
*/
const cpDarkTheme = /*@__PURE__*/EditorView.theme({
    "&": {
        color: text,
        backgroundColor: background
    },
    ".cm-content": {
        caretColor: cursor
    },
    ".cm-cursor, .cm-dropCursor": { borderLeftColor: cursor },
    "&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": { backgroundColor: selection },
    ".cm-panels": { backgroundColor: panelsBg, color: panelsFg },
    ".cm-panels.cm-panels-top": { borderBottom: "2px solid black" },
    ".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" },
    ".cm-searchMatch": {
        backgroundColor: "#72a1ff59",
        outline: "1px solid #457dff"
    },
    ".cm-searchMatch.cm-searchMatch-selected": {
        backgroundColor: "#6199ff2f"
    },
    ".cm-activeLine": { backgroundColor: activeLine },
    ".cm-selectionMatch": { backgroundColor: "#aafe661a" },
    "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
        //backgroundColor: "#bad0f847"
        textDecoration: "underline",
        color: "white !important"
    },
    ".cm-gutters": {
        backgroundColor: background,
        color: gutters,
        border: "none"
    },
    ".cm-activeLineGutter": {
        backgroundColor: highlightBackground
    },
    ".cm-foldPlaceholder": {
        backgroundColor: "transparent",
        border: "none",
        color: "#ddd"
    },
    ".cm-tooltip": {
        border: "none",
        backgroundColor: tooltipBackground
    },
    ".cm-tooltip .cm-tooltip-arrow:before": {
        borderTopColor: "transparent",
        borderBottomColor: "transparent"
    },
    ".cm-tooltip .cm-tooltip-arrow:after": {
        borderTopColor: tooltipBackground,
        borderBottomColor: tooltipBackground
    },
    ".cm-tooltip-autocomplete": {
        "& > ul > li[aria-selected]": {
            backgroundColor: highlightBackground,
            color: ivory
        }
    },
    // IXORA
    ".cm-blockquote": {
        color: quoteText
    },
    "media-container > media-tag, media-container > pre": {
        backgroundColor: ixoraCodeBg,
        borderRadius: "0 5px 5px 5px"
    },
    ".cm-codeblock": {
        backgroundColor: ixoraCodeBg
    },

}, { dark: true });

const linkColor = '#99cfff';

const cpDarkHighlightStyle = /*@__PURE__*/HighlightStyle.define([
    { tag: tags.keyword,
        color: violet },
    { tag: [tags.name, tags.deleted, tags.character, tags.propertyName, tags.macroName],
        color: coral },
    { tag: [/*@__PURE__*/tags.function(tags.variableName), tags.labelName],
        color: malibu },
    { tag: [tags.color, /*@__PURE__*/tags.constant(tags.name), /*@__PURE__*/tags.standard(tags.name)],
        color: whiskey },
    { tag: [/*@__PURE__*/tags.definition(tags.name), tags.separator],
        color: ivory },
    { tag: [tags.typeName, tags.className, tags.number, tags.changed, tags.annotation, tags.modifier, tags.self, tags.namespace],
        color: chalky },
    { tag: [tags.operator, tags.operatorKeyword, tags.url, tags.escape, tags.regexp, tags.link, /*@__PURE__*/tags.special(tags.string)],
        color: cyan },
    { tag: [tags.meta, tags.comment],
        color: stone },
    { tag: tags.strong,
        fontWeight: "bold" },
    { tag: tags.emphasis,
        fontStyle: "italic" },
    { tag: tags.strikethrough,
        textDecoration: "line-through" },
    { tag: tags.link,
        color: linkColor,
        textDecoration: "underline" },
    { tag: tags.heading,
        fontWeight: "bold",
        color: coral },
    { tag: [tags.atom, tags.bool, /*@__PURE__*/tags.special(tags.variableName)],
        color: whiskey },
    { tag: [tags.processingInstruction, tags.string, tags.inserted],
        color: sage },
    { tag: tags.invalid,
        color: invalid },
]);

const cryptpadDark = [cpDarkTheme, /*@__PURE__*/syntaxHighlighting(cpDarkHighlightStyle)];

export { cryptpadDark, cpDarkHighlightStyle, cpDarkTheme };
