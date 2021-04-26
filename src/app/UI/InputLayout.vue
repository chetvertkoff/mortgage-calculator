<template>
  <v-card outlined>
    <div>
      цель кредита
      <slot></slot>
    </div>
  </v-card>
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    name: 'InputLayout'
  })
</script>
