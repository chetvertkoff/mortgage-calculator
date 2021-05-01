<template>
  <v-col class="col-5 ml-auto" :align-self="'start'">
    <v-card elevation="0">
      <TotalStatistic :calculator="calculator"/>
      <v-row>
        <ModalWindow @on-modal-change="onModalOpen">
          <template v-slot:modal-header>
            <ChartHeader :chart="chart"/>
          </template>
          <template v-slot:modal-body>
            <ChartTable :chart="chart"/>
          </template>
        </ModalWindow>
      </v-row>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Inject } from 'vue-property-decorator'
import { ICalculatorUseCase } from '@/Domain/CalculatorUseCase'
import ModalWindow from '@/App/UI/ModalWindow.vue'
import { ChartUseCase } from '@/Domain/ChartUseСase'
import ChartHeader from '@/App/components/ChartHeader.vue'
import TotalStatistic from '@/App/components/TotatStatistic.vue'
import ChartTable from '@/App/components/ChartTable.vue'

@Component({
  components: {
    ModalWindow,
    ChartHeader,
    TotalStatistic,
    ChartTable
  }
})
export default class Total extends Vue {
  @Inject('calculator') private readonly calculator!: ICalculatorUseCase
  private chart: ChartUseCase = this.calculator.chartList

  onModalOpen (val: boolean) {
    if (!val) return
    this.chart = this.calculator.chartList
  }
}
</script>
