<template>
  <v-col class="col-11">
    <v-row>
      <v-col class="col-2 pl-1 pr-1">
        <p class="subtitle-2 mb-0 grey--text">Сумма кредита</p>
        <p class="text-h6 mb-0 font-weight-medium blue--text">{{ chart.totalSum|formatNum }} ₽</p>
      </v-col>
      <v-col class="col-2 pl-1 pr-1">
        <p class="subtitle-2 mb-0 grey--text">Процентная ставка</p>
        <p class="text-h6 mb-0 font-weight-medium">{{ chart.totalRate }}%</p>
      </v-col>
      <v-col class="col-2 pl-1 pr-1">
        <p class="subtitle-2 mb-0 grey--text"> Срок кредита</p>
        <p class="text-h6 mb-0 font-weight-medium">{{ chart.loanPeriod }} лет</p>
      </v-col>
      <v-col class="col-2 pl-1 pr-1">
        <p class="subtitle-2  mb-0 grey--text">Переплата</p>
        <p class="text-h6 mb-0 font-weight-medium">{{ chart.overpayment|roundFormat }} ₽</p>
      </v-col>
    </v-row>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { ChartUseCase } from '@/Domain/ChartUseСase'

@Component
export default class ChartHeader extends Vue {
  @Prop({ type: Object })
  private readonly chart!: ChartUseCase
}
</script>
