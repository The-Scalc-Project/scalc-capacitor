<script setup>
import NoteList from './NoteList.vue'

import noteData from '../config'
import {label, calculator} from '../scalc'

defineProps({
  set: {
    type: Object,
    required: true
  },

  tonic: {
    type: String,
    required: true
  },
})

</script>

<template>
  <NoteList :notes="calculator(tonic, set)" :label="label(tonic, set)" :highlight="[tonic]" />
</template>
