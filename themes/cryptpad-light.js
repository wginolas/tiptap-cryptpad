import { EditorView } from '@codemirror/view';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags } from '@lezer/highlight';

const chalky = "#e5c07b", coral = "#e06c75", cyan = "#56b6c2", invalid = "#ffffff", ivory = "#abb2bf", stone = "#7d8799", // Brightened compared to original to increase contrast
malibu = "#61afef", sage = "#98c379", whiskey = "#d19a66", violet = "#c678dd", darkBackground = "#21252b", highlightBackground = "#2c313a", tooltipBackground = "#353a42";


const text = '#000000';
const background = '#FFFFFF';
const cursor = '#000000';
const gutters = '#999'; //'#282a36';
const selection = 'rgba(0, 0, 0, 0.10)';
const activeLine = '#e8f2ff';

const panelsBg = '#FFFFFF';
const panelsFg = '#333';

const cpLightTheme = /*@__PURE__*/EditorView.theme({
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
        //color: quoteText
    },
    "media-container > media-tag, media-container > pre": {
        //backgroundColor: ixoraCodeBg,
        borderRadius: "0 5px 5px 5px"
    },
    ".cm-codeblock": {
        //backgroundColor: ixoraCodeBg
    },
}, { dark: false });

// Polar Night
const base00 = '#2e3440', // black
base01 = '#3b4252', // dark grey
base02 = '#434c5e', base03 = '#4c566a'; // grey
// Snow Storm
const base05 = '#e5e9f0', // off white
base06 = '#eceff4'; // white
// Frost
const base07 = '#8fbcbb', // moss green
base08 = '#88c0d0', // ice blue
base09 = '#81a1c1', // water blue
base0A = '#5e81ac'; // deep blue
// Aurora
const base0b = '#bf616a', // red
base0C = '#d08770', // orange
base0D = '#ebcb8b', // yellow
base0E = '#a3be8c', // green
base0F = '#b48ead'; // purple
const annotation = '#d30102';

const cpLightHighlightStyle = /*@__PURE__*/HighlightStyle.define([
    { tag: tags.keyword, color: base0A },
    {
        tag: [tags.name, tags.deleted, tags.character, tags.propertyName, tags.macroName],
        color: base0C
    },
    { tag: [tags.variableName], color: base0C },
    { tag: [/*@__PURE__*/tags.function(tags.variableName)], color: base0A },
    { tag: [tags.labelName], color: base09 },
    {
        tag: [tags.color, /*@__PURE__*/tags.constant(tags.name), /*@__PURE__*/tags.standard(tags.name)],
        color: base0A
    },
    { tag: [/*@__PURE__*/tags.definition(tags.name), tags.separator], color: base0E },
    { tag: [tags.brace], color: base07 },
    {
        tag: [tags.annotation],
        color: annotation
    },
    {
        tag: [tags.number, tags.changed, tags.annotation, tags.modifier, tags.self, tags.namespace],
        color: base08
    },
    {
        tag: [tags.typeName, tags.className],
        color: base0D
    },
    {
        tag: [tags.operator, tags.operatorKeyword],
        color: base0E
    },
    {
        tag: [tags.tagName],
        color: base0F
    },
    {
        tag: [tags.squareBracket],
        color: base0b
    },
    {
        tag: [tags.angleBracket],
        color: base0C
    },
    {
        tag: [tags.attributeName],
        color: base0D
    },
    {
        tag: [tags.regexp],
        color: base0A
    },
    {
        tag: [tags.quote],
        color: base01
    },
    { tag: [tags.string], color: base0C },
    {
        tag: tags.link,
        color: base07,
        textDecoration: 'underline',
        textUnderlinePosition: 'under'
    },
    {
        tag: [tags.url, tags.escape, /*@__PURE__*/tags.special(tags.string)],
        color: base0C
    },
    { tag: [tags.meta], color: base08 },
    { tag: [tags.comment], color: base02, fontStyle: 'italic' },
    { tag: tags.strong, fontWeight: 'bold', color: base0A },
    { tag: tags.emphasis, fontStyle: 'italic', color: base0A },
    { tag: tags.strikethrough, textDecoration: 'line-through' },
    { tag: tags.heading, fontWeight: 'bold', color: base0A },
    { tag: /*@__PURE__*/tags.special(tags.heading1), fontWeight: 'bold', color: base0A },
    { tag: tags.heading1, fontWeight: 'bold', color: base0A },
    {
        tag: [tags.heading2, tags.heading3, tags.heading4],
        fontWeight: 'bold',
        color: base0A
    },
    {
        tag: [tags.heading5, tags.heading6],
        color: base0A
    },
    { tag: [tags.atom, tags.bool, /*@__PURE__*/tags.special(tags.variableName)], color: base0C },
    {
        tag: [tags.processingInstruction, tags.inserted],
        color: base07
    },
    {
        tag: [tags.contentSeparator],
        color: base0D
    },
    { tag: tags.invalid, color: base02, borderBottom: `1px dotted ${invalid}` }
]);

const cryptpadLight = [cpLightTheme, /*@__PURE__*/syntaxHighlighting(cpLightHighlightStyle)];

export { cryptpadLight, cpLightHighlightStyle, cpLightTheme };
