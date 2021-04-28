<template>
  <v-col class="col-6" :align-self="'start'">
    {{loanReasons}}
    <v-row>
      <v-col class="col-12">
        <SelectListUI :label="'Цель кредита'" :hasBorder="true"/>
      </v-col>
      <v-spacer />
      <v-col class="col-12">
        <SwitchInputUI :label="'Есть зарплатная карта'" />
      </v-col>
      <v-col class="col-12">
        <SliderInputUI :label="'Стоимость недвижимости'"/>
      </v-col>
      <v-col class="col-12">
        <SliderInputUI :label="'Первоначальный взнос'"/>
      </v-col>
      <v-col class="col-12">
        <SliderInputUI :label="'Срок Кредита'"/>
      </v-col>
    </v-row>
  </v-col>
</template>

<script lang="ts">
import 'reflect-metadata'
import Vue from 'vue'
import Component from 'vue-class-component'
import { Container } from 'inversify'
import { Inject } from 'vue-property-decorator'
import InputLayout from '@/App/UI/BaseInput.vue'
import SelectListUI from '@/App/UI/SelectListInputUI.vue'
import SwitchInputUI from '@/App/UI/SwitchInputUI.vue'
import SliderInputUI from '@/App/UI/SliderInputUI.vue'
import { DocumentNode } from 'graphql'
import { StoreDI } from '@/Store/Store'
import { ICalculatorUseCase, CalculatorDI } from '@/Domain/CalculatorUseCase'
import { LoanReasons } from '@/Domain/LoanReasons'

@Component({
  components: { InputLayout, SelectListUI, SwitchInputUI, SliderInputUI },
  apollo: {
    loanReasons: {
      query () { return this.queries.GET_LOAN_REASONS },
      update ({ loanReasons }): LoanReasons[] {
        this.calculator.loanReasons = loanReasons
        return this.calculator.loanReasons
      }
    }
  }
})
export default class InputGroup extends Vue {
  @Inject('container') private readonly containerDI!: Container
  private readonly queries: { [key: string]: DocumentNode } = this.containerDI.get(StoreDI).queries
  private readonly calculator: ICalculatorUseCase = this.containerDI.get(CalculatorDI)
}
</script>
