import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'

const editor = new Editor({
  element: document.querySelector('.cp-tiptap-element'),
  extensions: [StarterKit],
  content: '<p>Hello World!</p>',
})

window.Tiptap = window.Tiptap | {};
window.Tiptap.editor = editor;
