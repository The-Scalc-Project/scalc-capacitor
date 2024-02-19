<script setup>
import { useSelectionStore } from '../stores/selection'

const selection = useSelectionStore()

defineProps({
  note: {
    type: String,
    required: true
  },

  highlighted: {
    type: Boolean,
    required: false
  },

  variant: {
    type: String,
    required: false
  }
})
</script>

<template>

  <dd class="note" :class="[variant, {'selected': selection.selection[note] }]" @click="selection.toggle(note)">
    {{ note }}
  </dd>
</template>

<style scoped>
.note {
  
  border: 1px solid var(--border-color);
  color: var(--border-color);
  background: white;

  padding:0.3em;
  margin:0.3em;
  width: 2.0em;
  text-align: center;

  cursor: pointer;
}

.note.phantom {
  opacity: 0.1;
}

.note.selected {
  filter: invert(100%);
}
</style>
