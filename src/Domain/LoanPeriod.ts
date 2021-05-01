import { IsNumber } from 'class-validator'
import { Entity } from '@/Domain/Entity'

export class LoanPeriod extends Entity {
  @IsNumber()
  min: number

  @IsNumber()
  max: number

  @IsNumber()
  step: number

  @IsNumber()
  value: number

  constructor (props?: LoanPeriod) {
    super()
    this.min = props?.min ?? 0
    this.max = props?.max ?? 0
    this.step = props?.step ?? 1
    this.value = (this.min + this.max) / 2
  }
}
