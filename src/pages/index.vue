<template>
  <v-container>
    <h1>Welcome to Your App {{ apiUrl }}</h1>
  </v-container>
</template>

<script lang="ts" setup>
import {useConfig} from '@/composables/useConfig'
const {apiUrl} = useConfig()

  //
</script>
