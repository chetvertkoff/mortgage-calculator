<template>
  <v-card :flat="true" :outlined="hasBorder" class="pl-2 pt-2 pr-2 slider-input" :class="{'validate-error': hasErr}">
    <p class="mb-0 align-self-end" >{{label}}</p>
    <v-text-field
        pre
        ref="field"
        class="pr-0 pl-0 custom-field"
        v-model="textVal"
        :rules="textFieldRule"
        type="number"
        hide-details
        @update:error="updateError"
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
import Vue from 'vue'
import Component from 'vue-class-component'
import BaseInput from '@/App/UI/BaseInput.vue'
import { Prop, Watch } from 'vue-property-decorator'
import { toNum } from '@/App/utils/numeric'

@Component
export default class SliderInputUI extends BaseInput {
  @Prop({ type: Function })
  private readonly submitValidate!: () => void

  private hasErr = false
  private privtextVal = 0
  private step = 1
  private min = 1

  private textFieldRule = [
    (v: string): boolean => !!v,
    (v: string): boolean => this.data.min <= (+v)
  ]

  get textVal (): number {
    return this.privtextVal
  }

  set textVal (val: number) {
    if (this.submitValidate && this.hasErr) this.hasErr = false
    if (this.data.min >= val) {
      this.privtextVal = val
      return
    }
    this.data.value = val
  }

  @Watch('submitValidate')
  validateForm (): void {
    this.hasErr = !(this.$refs.field as Vue & { validate: () => boolean }).validate()
  }

  @Watch('data.value')
  changeVal (val: number): void {
    this.privtextVal = val
  }

  private updateError (val: boolean) {
    if (!!this.submitValidate) return
    this.hasErr = val
  }

  private stepOn () {
    if (this.submitValidate && this.hasErr) this.hasErr = false
    this.step = this.data.step
    this.min = this.data.min
  }

  private stepOff () {
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
  .validate-error {
    border-color: #ff5252 !important;
  }
</style>
