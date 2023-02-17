import {StateField, StateEffect } from "@codemirror/state"
import {EditorView, Decoration } from "@codemirror/view"



const addAuthor = StateEffect.define(), removeAuthor = StateEffect.define()

const authorExt = StateField.define({
  create() { return Decoration.none },
  update(value, tr) {
    value = value.map(tr.changes)
    for (let effect of tr.effects) {
      if (effect.is(addAuthor)) { value = value.update({add: effect.value, sort: true}) }
      else if (effect.is(removeAuthor)) {
        value = value.update({filter: effect.value})
      }
    }
    return value
  },
  provide: f => EditorView.decorations.from(f)
})


export { addAuthor, removeAuthor, authorExt }

