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
import { CalculatorDI, ICalculatorUseCase } from '@/Domain/CalculatorUseCase'

@Component({
  components: { FormLayout, Total, InputGroup }
})
export default class App extends Vue {
  @Prop({ type: Object }) private readonly container!: Container;
  @Provide('container') containerDI = this.container
  @Provide('calculator') calculator: ICalculatorUseCase = this.containerDI.get(CalculatorDI)

}
</script>

<style lang="scss">
  html {
    font-size: 13px;
    .custom-label {
      font-size: 16px;
    }
    // input type number hide arrows
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type=number] {
      -moz-appearance: textfield;
    }
  }
</style>
