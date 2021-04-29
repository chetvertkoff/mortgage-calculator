<template>
  <v-card :flat="true" :outlined="hasBorder" class="pl-2 pt-2 pr-2 slider-input">
    <p class="mb-0 align-self-end" >{{label}}</p>
    <v-slider
      class="flex-column-reverse"
      v-model="data.value"
      :step="data.step"
      :max="data.max"
      :min="data.min"
      hide-details
    >
      <template v-slot:append class="" class="pr-0 pl-0 ml-0" >
        <v-text-field
          class="pr-0 pl-0 custom-field"
          v-model="formatVal"
          @input.native="changeVal"
          @keyup="keyhandler"
          hide-details
          solo
          elevation="0"
          single-line
          :flat="true"
        />
      </template>
    </v-slider>
    <div class="d-flex justify-space-between">
      <div class="align-self-end">{{ data.min|shortNumCurrency }}</div>
      <div class="align-self-end align-self-end">{{ data.max|shortNumCurrency }}</div>
    </div>
  </v-card>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import BaseInput from '@/App/UI/BaseInput.vue'
import { Watch } from 'vue-property-decorator'
import { formatNum, toNum } from '@/App/utils/numeric'

@Component
export default class SliderInputUI extends BaseInput {
  private formatVal: string = ''
  private oldVal:string = ''

  @Watch('data.value')
  changeVal

  keyhandler(event) {
    const num = event?.target?.value
    if(isNaN(toNum(num))) {
      event.preventDefault()
      this.formatVal = this.oldVal
    }
  }

  changeVal(e: DocumentEvent|number): string {
    const num = e?.target?.value ?? e
    if(isNaN(toNum(num))) {
      return
    }

    this.formatVal = formatNum(toNum(num))
    this.oldVal = this.formatVal
  }

}
</script>

<style lang="scss">
  .slider-input {
    .v-input {
      &__slot {
        background: transparent !important;
        padding: 0 !important;
      }
      &__control {
        min-height: 0 !important;
      }
      &__append-outer {
        width: 100%;
        margin-left: 0 !important;
      }
      input {
        padding-bottom: 0 !important;
      }
    }
  }
</style>
