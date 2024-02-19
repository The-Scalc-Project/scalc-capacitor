import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import noteData from '../config'

var notes = {
}

for(const note of noteData.notesByHalfTone) {
  notes[note] = false
}

export const useSelectionStore = defineStore('selection', {
  state: () => ({
    selection: notes,
  }),
  getters: {
    selected(state) {
      return (note) => {
        state.selection[note]
      }
    },
  },


  actions: {
    toggle(note) {
      this.selection[note] = !this.selection[note]
    }
  }
})
