<template>
  <v-card elevation="0">
    <div class="d-flex justify-space-between">
      <p class="mb-0 custom-label align-self-end" >{{label}}</p>
      <div class="d-flex">
        <span class="align-self-end mr-5 custom-label blue--text font-weight-medium"> {{data.rateText}}</span>
        <v-switch
            class="mt-0 switchInput"
            hide-details
            v-model="data.selected"
        />
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import BaseInput from '@/App/UI/BaseInput.vue'
@Component
export default class SwitchInputUI extends BaseInput {
}
</script>
