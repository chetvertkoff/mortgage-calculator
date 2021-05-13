<template>
  <v-col class="col-11">
    <v-row>
      <v-col class="col-2 pl-1 pr-1">
        <p class="subtitle-2 mb-0 grey--text">Сумма кредита</p>
        <p class="text-h6 mb-0 font-weight-medium blue--text">{{ chartHeader.totalSum|formatNum }} ₽</p>
      </v-col>
      <v-col class="col-2 pl-1 pr-1">
        <p class="subtitle-2 mb-0 grey--text">Процентная ставка</p>
        <p class="text-h6 mb-0 font-weight-medium">{{ chartHeader.totalRate }}%</p>
      </v-col>
      <v-col class="col-2 pl-1 pr-1">
        <p class="subtitle-2 mb-0 grey--text"> Срок кредита</p>
        <p class="text-h6 mb-0 font-weight-medium">{{ chartHeader.loanPeriod }} лет</p>
      </v-col>
      <v-col class="col-2 pl-1 pr-1">
        <p class="subtitle-2  mb-0 grey--text">Переплата</p>
        <p class="text-h6 mb-0 font-weight-medium">{{ chartHeader.overpayment|roundFormat }} ₽</p>
      </v-col>
    </v-row>
  </v-col>
</template>

<script lang="ts">
import 'reflect-metadata'
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop, Inject } from 'vue-property-decorator'
import { ChartUseCase } from '@/Domain/ChartUseСase'
import { ICalculatorUseCase } from '@/Domain/CalculatorUseCase'

@Component
export default class ChartHeader extends Vue {
  @Inject('calculator')
  private readonly calculator!: ICalculatorUseCase

  @Prop({ type: Object })
  private chart!: ChartUseCase

  get chartHeader (): ChartUseCase {
    return this.chart ?? this.calculator.chartList
  }
}
</script>
