import { IsNumber } from 'class-validator'

export class HasSalaryCard {
  @IsNumber()
  rate:number

  rateText: string

  selected: boolean

  constructor (props?: HasSalaryCard) {
    this.rate = props?.rate ?? 0
    this.rateText = `- ${this.rate}%`
    this.selected = false
  }

  get value() {
    if(this.selected) return this.rate
    return 0
  }

}
