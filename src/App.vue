<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <header>
      <h1>{{ t('app.title') }}</h1>
      <ul>
        <li><RouterLink :to="{ name: 'byNotes'}">{{ t('menu.byNotes') }}</RouterLink></li>
        <li><RouterLink :to="{ name: 'about'}">{{ t('menu.about') }}</RouterLink></li>
      </ul>
  </header>

  <RouterView />
</template>

<style scoped>

</style>