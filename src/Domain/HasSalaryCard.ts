import { IsNumber } from 'class-validator'

export class HasSalaryCard {

  @IsNumber()
  rate:number

  constructor (props?: HasSalaryCard) {
    this.rate = props?.rate ?? 0
  }
}
