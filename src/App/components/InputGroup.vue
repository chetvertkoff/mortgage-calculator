<template>
  <v-col class="col-6" :align-self="'start'">
    <v-row>
      <v-col class="col-12">
        <SelectListUI
            :data="loanReasonsListData"
            :label="'Цель кредита'"
            :hasBorder="true"
        />
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
import { IStore, StoreDI } from '@/Store/Store'
import { ICalculatorUseCase, CalculatorDI } from '@/Domain/CalculatorUseCase'
import { LoanReasonList } from '@/Domain/LoanReasonList'

@Component({
  components: { InputLayout, SelectListUI, SwitchInputUI, SliderInputUI },
  apollo: {
    loanReasonsList: {
      query () { return this.queries.GET_LOAN_REASONS },
      update ({ loanReasonsList }): LoanReasonList {
        this.calculator.loanReasonList = loanReasonsList
        this.loanReasonsListData = this.calculator.loanReasonList
      },
    },
  }
})
export default class InputGroup extends Vue {
  @Inject('container') private readonly containerDI!: Container
  private readonly store: IStore = this.containerDI.get(StoreDI)
  private readonly queries: { [key: string]: DocumentNode } = this.store.queries
  private readonly calculator: ICalculatorUseCase = this.containerDI.get(CalculatorDI)

  private readonly loanReasonsListData: LoanReasonList = this.calculator.loanReasonList

}
</script>
