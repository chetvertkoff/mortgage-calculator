<template>
  <v-card elevation="0">
    <div class="d-flex justify-space-between">
      <p class="mb-0">{{label}}</p>
      <v-switch
        class="mt-0"
        v-model="selected"
        hide-details
        label="as"
      />
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import BaseInput from '@/App/UI/BaseInput.vue'
@Component
export default class SwitchInputUI extends BaseInput {
    selected = true
}
</script>
