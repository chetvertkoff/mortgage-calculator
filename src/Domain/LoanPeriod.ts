import { IsNumber } from 'class-validator'

export class LoanPeriod {
  @IsNumber()
  min: number

  @IsNumber()
  max: number

  @IsNumber()
  step: number

  @IsNumber()
  value: number

  constructor (props?: LoanPeriod) {
    this.min = props?.min ?? 0
    this.max = props?.max ?? 0
    this.step = props?.step ?? 1
    this.value = props?.value ?? 0
  }
}
