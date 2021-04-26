<template>
  <v-app>
    <v-main>
      <Layout>
        <InputGroup/>
        <Total/>
      </Layout>
    </v-main>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Layout from "@/App/components/Layout.vue";
  import Component from 'vue-class-component'
  import Total from "@/App/components/Total.vue";
  import InputGroup from "@/App/components/InputGroup.vue";

  @Component({components: {Layout, Total, InputGroup}})
  export default class App extends Vue {}
</script>
