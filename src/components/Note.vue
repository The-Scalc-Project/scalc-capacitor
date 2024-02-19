<script setup>
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
  <dd class="note" :class="variant" @click="">
    {{ note }}
  </dd>
</template>

<style scoped>
.note {
  border: 1px solid var(--border-color);
  padding:0.3em;
  margin:0.3em;
  width: 2.0em;
  text-align: center;
}

.note.phantom {
  opacity: 0.1;
}
</style>
