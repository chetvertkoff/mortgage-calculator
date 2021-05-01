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

  constructor (month: string, year: number, annuitet: number) {
    super()
    this.month = month
    this.year = year
    this.annuitet = annuitet
  }

// - Месяц, год
// - Сумма платежа (везде одинаковая, так как платеж аннуитетный)
// - Часть суммы, которая идет на погашение процентов
// - Часть суммы, которая идет на погашение основного долга
// - Остаток долга
}
