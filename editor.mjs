import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'

window.Tiptap = window.Tiptap | {};
window.Tiptap.Editor = Editor;
window.Tiptap.StarterKit = StarterKit;

new Editor({
  element: document.querySelector('.cp-tiptap-element'),
  extensions: [StarterKit],
  content: '<p>Hello World!</p>',
})
