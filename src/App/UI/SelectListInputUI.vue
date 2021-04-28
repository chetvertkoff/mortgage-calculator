<template>
  <v-card elevation="0" >
    <v-select
        outlined
        :label="label"
        hide-details
        :menu-props="{ bottom: true, offsetY: true }"
        v-model="data.value.name"
    >
      <template v-slot:prepend-item>
        <v-list-item
            ripple
            v-for="list in data.list"
            @click="data.value.name = list.name"
        >
        {{list}}
        </v-list-item>
        <v-divider class="mt-2"></v-divider>
      </template>
    </v-select>
  </v-card>
</template>

<script lang="ts">
import BaseInput from '@/App/UI/BaseInput.vue'
import Component from 'vue-class-component'

@Component
export default class SelectListUI extends BaseInput {


}
</script>
