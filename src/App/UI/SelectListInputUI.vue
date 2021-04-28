<template>
  <v-card elevation="0" >
    <v-select
        outlined
        :label="label"
        hide-details
        :menu-props="{ bottom: true, offsetY: true }"
    ></v-select>
  </v-card>
</template>

<script lang="ts">
import BaseInput from '@/App/UI/BaseInput.vue'

export default class SelectListUI extends BaseInput {

}
</script>
