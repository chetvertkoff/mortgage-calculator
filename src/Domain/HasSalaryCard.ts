import { IsNumber } from 'class-validator'
import { Entity } from '@/Domain/Entity'

export class HasSalaryCard extends Entity {
  @IsNumber()
  rate: number

  rateText: string

  selected: boolean

  constructor (props?: HasSalaryCard) {
    super()
    this.rate = props?.rate ?? 0
    this.rateText = `- ${this.rate}%`
    this.selected = false
  }

  get value () {
    if (this.selected) return this.rate
    return 0
  }
}
