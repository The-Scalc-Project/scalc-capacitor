<script setup>
import Note from './Note.vue'
import noteData from '../config'

defineProps({
  notes: {
    type: Array,
    required: true
  },
/*
  highlighted: {
    type: Array,
    required: false
  }*/

  label: {
    type: String,
    required: false
  },
})

</script>

<template>
  
  <dl class="noteList">
    
    <dt class="noteList__title">{{ label }}</dt>

    <template v-for="note in notes">
      <Note :note="note" />
    </template>

<!--
    <template v-for="note in noteData.notesByHalfTone">
      <Note :note="note" :variant="(notes.indexOf(note) < 0) ? 'phantom':''" />
    </template>
-->
    

  </dl>
</template>


<style scoped>
.noteList{
  display: block;
}

.noteList__title {
  display: inline-block;
  width: 10em;
  text-align: right;
  padding-right: 1em;
}

.noteList dd {
  display: inline-block;

}
</style>
