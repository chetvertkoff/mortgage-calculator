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
        <SwitchInputUI
          :data="hasSalaryCardData"
          :label="'Есть зарплатная карта'"
        />
      </v-col>
      <v-col class="col-12">
        <SliderInputUI
          :label="'Стоимость недвижимости'"
          :data="houseCostData"
          :hasBorder="true"
        />
      </v-col>
      <v-col class="col-12">
        <SliderInputUI
          :label="'Первоначальный взнос'"
          :data="initialPaymentData"
          :hasBorder="true"
        />
      </v-col>
      <v-col class="col-12">
        <SliderInputUI
          :label="'Срок Кредита'"
          :data="loanPeriodData"
          :hasBorder="true"
        />
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
import { ICalculatorUseCase } from '@/Domain/CalculatorUseCase'
import { LoanReasonList } from '@/Domain/LoanReasonList'
import { HasSalaryCard } from '@/Domain/HasSalaryCard'
import { HouseCost } from '@/Domain/HouseCost'
import { InitialPayment } from '@/Domain/InitialPayment'
import { LoanPeriod } from '@/Domain/LoanPeriod'

@Component({
  components: { InputLayout, SelectListUI, SwitchInputUI, SliderInputUI },
  apollo: {
    loanReasonsList: {
      query () { return this.queries.GET_LOAN_REASONS },
      update ({ loanReasonsList }) {
        this.calculator.loanReasonList = loanReasonsList
        this.loanReasonsListData = this.calculator.loanReasonList
      }
    },
    hasSalaryCard: {
      query () { return this.queries.GET_HAS_SALARY_CARD },
      update ({ hasSalaryCard }) {
        this.calculator.hasSalaryCard = hasSalaryCard
        this.hasSalaryCardData = this.calculator.hasSalaryCard
      }
    },
    houseCost: {
      query () { return this.queries.GET_HOUSE_COST },
      update ({ houseCost }) {
        this.calculator.houseCost = houseCost
        this.houseCostData = this.calculator.houseCost
      }
    },
    initialPayment: {
      query () { return this.queries.GET_INITIAL_PAYMENT },
      update ({ initialPayment }) {
        this.calculator.initialPayment = initialPayment
        this.initialPaymentData = this.calculator.initialPayment
      }
    },
    loanPeriod: {
      query () { return this.queries.GET_LOAN_PERIOD },
      update ({ loanPeriod }) {
        this.calculator.loanPeriod = loanPeriod
        this.loanPeriodData = this.calculator.loanPeriod
      }
    }
  }
})
export default class InputGroup extends Vue {
  @Inject('container') private readonly containerDI!: Container
  @Inject('calculator') private readonly calculator!: ICalculatorUseCase
  private readonly store: IStore = this.containerDI.get(StoreDI)
  private readonly queries: { [key: string]: DocumentNode } = this.store.queries

  private readonly loanReasonsListData: LoanReasonList = this.calculator.loanReasonList
  private readonly hasSalaryCardData: HasSalaryCard = this.calculator.hasSalaryCard
  private readonly houseCostData: HouseCost = this.calculator.houseCost
  private readonly initialPaymentData: InitialPayment = this.calculator.initialPayment
  private readonly loanPeriodData: LoanPeriod = this.calculator.loanPeriod
}
</script>
