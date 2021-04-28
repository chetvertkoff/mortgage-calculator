<template>
  <v-app>
    <v-main>
      <FormLayout>
        <InputGroup/>
        <Total/>
      </FormLayout>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import FormLayout from '@/App/components/FormLayout.vue'
import Component from 'vue-class-component'
import { Prop, Provide } from 'vue-property-decorator'
import Total from '@/App/components/Total.vue'
import InputGroup from '@/App/components/InputGroup.vue'
import { Container } from 'inversify'

@Component({
  components: { FormLayout, Total, InputGroup }
})
export default class App extends Vue {
  @Prop({ type: Object }) private readonly container!: Container;
  @Provide('container') containerDI = this.container
}
</script>
