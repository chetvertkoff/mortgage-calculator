<template>
  <v-card :flat="true" outlined>
    <v-text-field
        hide-details
        solo
        elevation="0"
        :flat="true"
    />
    <v-slider
        v-model="range"
      step="1"
      :max="20"
      :min="1"
        hide-details
    />

  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class SliderInputUI extends Vue {
  range = 1
}
</script>
