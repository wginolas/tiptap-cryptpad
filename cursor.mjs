import {StateField, StateEffect} from "@codemirror/state"
import {WidgetType, EditorView, Decoration} from "@codemirror/view"

class CursorWidget extends WidgetType {
  constructor(color, title, id) {
    super();
    this.color = color;
    this.title = title;
    this.id = id;
  }

  eq(other) { return other.id == this.id }

  toDOM() {
    let cursor = document.createElement("i");
    cursor.setAttribute("aria-hidden", "true");
    cursor.className = "cp-codemirror-cursor";
    cursor.setAttribute("id", this.id);
    cursor.setAttribute("title", this.title);
    cursor.setAttribute("data-cptippy-html", "true");
    cursor.setAttribute('style', `border-color:${this.color};background-color:${this.color}`);
    return cursor;
  }
  ignoreEvent() { return true }
}




const addCursor = StateEffect.define(), removeCursor = StateEffect.define()

const all = {};

const cursorExt = StateField.define({
  create() { return Decoration.none },
  update(value, tr) {
    for (let effect of tr.effects) {
      if (effect.is(addCursor)) value = value.update({add: effect.value, sort: true})
      else if (effect.is(removeCursor)) value = value.update({filter: effect.value})
    }
    return value
  },
  provide: f => EditorView.decorations.from(f)
})



export { CursorWidget, addCursor, removeCursor, cursorExt }
