<script setup>
import NoteList from '../components/NoteList.vue'
import CalculatedNoteList from '../components/CalculatedNoteList.vue'
import noteData from '../config'
</script>

<template>
    <div class="byNotes">
      <h2>by notes</h2>

      <NoteList :notes="noteData.notesByHalfTone" />
      
      <div>
        <template v-for="note in noteData.notesByHalfTone">


          <h3>{{ note }}</h3>
          <template v-for="set in noteData.sets">
            <CalculatedNoteList :set="set" :tonic="note" />            
          </template>
          
        </template>

      </div>

    </div>
</template>
