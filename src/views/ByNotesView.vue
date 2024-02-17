<script setup>
import noteData from '../config'
import {label, calculator} from '../scalc'
</script>

<template>
    <div class="byNotes">
      <h2>by notes</h2>

      <ul>
        <li v-for="note in noteData.notesByHalfTone">{{ note }}</li>
      </ul>
      
      <div>
        <template v-for="note in noteData.notesByHalfTone">
          <h3>{{ note }}</h3>
          <ul>
          <template v-for="set in noteData.sets">
            <li>{{ set.identifier }} {{ label(note, set) }} : {{ calculator(note, set) }}</li>
          </template>
          </ul>
        </template>

      </div>

    </div>
</template>
