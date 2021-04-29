import { IsNumber } from 'class-validator'

export class HouseCost {
  @IsNumber()
  min: number

  @IsNumber()
  max: number

  @IsNumber()
  step: number

  @IsNumber()
  value: number

  constructor (props?: HouseCost) {
    this.min = props?.min ?? 0
    this.max = props?.max ?? 0
    this.step = props?.step ?? 0
    this.value = (this.min+this.max)/2
  }
}
