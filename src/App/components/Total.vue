<template>
  <v-col class="col-5 ml-auto" :align-self="'start'">
    <v-card elevation="0">
      {{calculator}}
      <v-row>
        <v-col class="col-5 mr-auto">
         <p class="transition-swing text-h6 font-weight-regular">Ежемесячный платеж</p>
          {{calculator.totalLoanSum}}
        </v-col>
        <v-col class="col-6">
          <p class="transition-swing text-h6 font-weight-regular">Процентная ставка</p>
          {{calculator.totalRate}}
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-5 mr-auto">
          Ежемесячный платеж
        </v-col>
        <v-col class="col-6">
          Процентная ставка
        </v-col>
      </v-row>
      <v-row>
        <v-btn
            class="col-12 pa-6"
            depressed
            color="primary"
        >      Получить одобрение
        </v-btn>
      </v-row>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Inject } from 'vue-property-decorator'
import { ICalculatorUseCase } from '@/Domain/CalculatorUseCase'

@Component({})
export default class Total extends Vue {
  @Inject('calculator') private readonly calculator: ICalculatorUseCase


}
</script>
