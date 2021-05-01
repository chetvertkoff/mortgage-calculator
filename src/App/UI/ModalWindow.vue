<template>
  <v-dialog
      v-model="dialog"
      max-width="80%"
      scrollable
  >
    <v-card>
      <v-card-title class="headline lighten-2 d-flex">
        <v-row>
          <slot name="modal-header"/>
          <v-col class="col-1 justify-end text-right">
            <v-icon
                color="grey darken-2 ml-auto"
                medium
                @click="dialog = false"
            >
              mdi-close
            </v-icon>
          </v-col>
        </v-row>
      </v-card-title>
      <slot name="modal-body"/>

      <v-divider></v-divider>

    </v-card>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          class="col-12 pa-6"
          depressed
          color="primary"
          v-on="on"
      >
        График платежей
      </v-btn>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Inject, Watch } from 'vue-property-decorator'
import { ICalculatorUseCase } from '@/Domain/CalculatorUseCase'
import { ChartUseCase } from '@/Domain/ChartUseСase'

@Component
export default class ModalWindow extends Vue {
  @Inject('calculator') private readonly calculator!: ICalculatorUseCase
  private chart: ChartUseCase = this.calculator.chartList
  private dialog = false

  @Watch('dialog')
  onDialogChange (val: boolean) {
    this.$emit('on-modal-change', val)
  }
}
</script>

<style >
  .v-card__text, .v-dialog {
    overflow: inherit !important;
  }
</style>
