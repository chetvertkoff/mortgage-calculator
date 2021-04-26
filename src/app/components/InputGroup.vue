<template>
  <v-col class="col-6" :align-self="'start'">
    <InputLayout name="input-component">
      <SelectListUI />
    </InputLayout>
  </v-col>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import InputLayout from "@/App/UI/InputLayout.vue";
  import SelectListUI from "@/App/UI/SelectListUI.vue";

  @Component({components: {InputLayout, SelectListUI}})
  export default class InputGroup extends Vue {

  }
</script>
