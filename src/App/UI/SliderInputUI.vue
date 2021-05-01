<template>
  <v-card :flat="true" :outlined="hasBorder" class="pl-2 pt-2 pr-2 slider-input">
    <p class="mb-0 align-self-end" >{{label}}</p>
    <v-text-field
        class="pr-0 pl-0 custom-field"
        v-model="textVal"
        hide-details
        solo
        elevation="0"
        single-line
        :flat="true"
    />
    <v-slider
      class="flex-column-reverse"
      v-model="data.value"
      :step="step"
      :max="data.max"
      :min="min"
      @mousedown="stepOn"
      @mouseup="stepOff"
      hide-details
    >
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
import { toNum } from '@/App/utils/numeric'

@Component
export default class SliderInputUI extends BaseInput {
  private prvtextVal: nuber = 0
  private step = 1
  private min = 1

  get textVal () {
    return this.prvtextVal
  }

  set textVal (val) {
    if (this.data.min >= val) {
      this.prvtextVal = val
      return
    }
    this.data.value = toNum(val)
  }

  @Watch('data.value')
  changeVal (val) {
    this.prvtextVal = val
  }

  stepOn (val) {
    this.step = this.data.step
    this.min = this.data.min
  }

  stepOff () {
    this.step = 1
    this.min = 1
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
