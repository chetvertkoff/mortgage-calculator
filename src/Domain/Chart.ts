import { Entity } from '@/Domain/Entity'
import { IsInt } from 'class-validator'

export class Chart extends Entity {
  month = ''

  year: number = new Date().getFullYear()

  @IsInt()
  annuitet = 0

  @IsInt()
  loanSum = 0 // сумма на погашение основного долга

  @IsInt()
  rateSum = 0 // сумма на погашение процентов

  @IsInt()
  leftToPay = 0 // оставшийся долг

  constructor (month: string, year: number, annuitet: number = 0, rateSum: number = 0, loanSum: number = 0, leftToPay: number = 0) {
    super()
    this.month = month
    this.year = year
    this.annuitet = annuitet
    this.rateSum = Math.round(rateSum)
    this.loanSum = Math.round(loanSum)
    this.leftToPay = Math.round(leftToPay)
  }
}
