import { javascript } from "@codemirror/lang-javascript"
import { python } from "@codemirror/lang-python"
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";


const languages = [
  {
    extension: [],
    name: 'Text',
    id: 'text',
    ext: ['.txt', '']
  },
  {
    extension: javascript(),
    name: 'JavaScript',
    id: 'javascript', // XXX preserve backward compatibility for all languages
    ext: ['.js']
  },
  {
    extension: markdown({
        base: markdownLanguage,
        codeLanguages: (str) => {
            let res = languages.find((obj) => { return obj.id === str });
            if (!res) { return []; }
            return res.extension.language;
        }}),
    name: 'Markdown',
    id: 'gfm',
    ext: ['.md']
  },
  {
    extension: python(),
    name: 'Python',
    id: 'python',
    ext: ['.py']
  },
]

export { languages }
