<template>
  <v-col class="col-5 ml-auto" :align-self="'start'">
    <v-card elevation="0">
      {{calculator.overpayment}}
      <v-row>
        <v-col class="col-5 mr-auto">
          <p class="transition-swing text-h6 font-weight-regular grey--text">Ежемесячный платеж</p>
          <p class="text-h4 font-weight-medium">{{calculator.annuitet|formatNum}}</p>
        </v-col>
        <v-col class="col-6">
          <p class="transition-swing text-h6 font-weight-regular grey--text">Процентная ставка</p>
          <p class="text-h4 font-weight-medium blue--text">{{calculator.totalRate}} %</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-5 mr-auto">
         <p class="transition-swing text-h6 font-weight-regular grey--text">Сумма кредита</p>
          <p class="text-h5 font-weight-medium">{{calculator.totalSum|formatNum}} ₽</p>
        </v-col>
        <v-col class="col-6">
          <p class="transition-swing text-h6 font-weight-regular grey--text">Необходимый доход</p>
          <p class="text-h5 font-weight-medium">{{calculator.shouldEarn|formatNum}} ₽</p>
        </v-col>
      </v-row>
      <v-row>
        <ModalWindow/>
      </v-row>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Inject } from 'vue-property-decorator'
import { ICalculatorUseCase } from '@/Domain/CalculatorUseCase'
import ModalWindow from '@/App/UI/ModalWindow'


@Component({
  components: {ModalWindow}
})
export default class Total extends Vue {
  @Inject('calculator') private readonly calculator!: ICalculatorUseCase

}
</script>
