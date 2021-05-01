import { Calculator } from '@/Domain/Calculator'
import { injectable } from 'inversify'
import { LoanReasonList } from '@/Domain/LoanReasonList'
import { HasSalaryCard } from '@/Domain/HasSalaryCard'
import { HouseCost } from '@/Domain/HouseCost'
import { InitialPayment } from '@/Domain/InitialPayment'
import { LoanPeriod } from '@/Domain/LoanPeriod'
import { ChartUseCase } from '@/Domain/ChartUseСase'

export const CalculatorDI = Symbol.for('CalculatorDI')

export interface ICalculatorUseCase {
  loanReasonList: LoanReasonList
  hasSalaryCard: HasSalaryCard
  houseCost: HouseCost
  initialPayment: InitialPayment
  loanPeriod: LoanPeriod
  totalRate: number
  totalLoanSum: number // sum with loan
  totalSum: number // sum without loan
  annuitet: number
  shouldEarn: number
  overpayment: number
  chartList: ChartUseCase,
  loanPeriodToMonth: number
}

@injectable()
export class CalculatorUseCase extends Calculator implements ICalculatorUseCase {
  constructor () {
    super()
  }

  get chartList () {
    return new ChartUseCase(
      this.totalSum,
      this.totalRate,
      this.loanPeriod.value,
      this.overpayment,
      this.annuitet
    )
  }

  // переплата
  get overpayment (): number {
    return this.totalLoanSum - this.totalSum
  }

  // необходимый ежемесячный доход
  get shouldEarn (): number {
    const annuitet = this.annuitet
    return Math.round((annuitet + (annuitet / 100 * 30)))
  }

  // конечная процентная ставка
  get totalRate (): number {
    return this.calcRate()
  }

  // полная сумма с процентами, необходимую выплатить
  get totalLoanSum (): number {
    return this.annuitet * this.loanPeriodToMonth
  }

  // ежемесячная сумма выплаты
  get annuitet (): number {
    return this.calcAnnuitet()
  }

  // сумма требуемого кредита
  get totalSum (): number {
    return this.calcTotalSum()
  }

  // общий период (года) в месяцы
  get loanPeriodToMonth (): number {
    return this.loanPeriod.value * 12
  }

  // подсчет конечной процентной ставки
  private calcRate (): number {
    if (this.loanReasonList.value.rate <= this.hasSalaryCard.value) return this.loanReasonList.value.rate
    return this.loanReasonList.value.rate - this.hasSalaryCard.value
  }

  // расчет суммы требуемого кредита
  private calcTotalSum (): number {
    if (this.initialPayment.value >= this.houseCost.value) return this.houseCost.value
    return this.houseCost.value - this.initialPayment.value
  }

  // аннуитетный платеж по кредиту
  private calcAnnuitet (): number {
    const r = this.totalRate / 1200
    const monthCount = this.loanPeriod.value * 12
    const sum = this.totalSum

    const res = sum * r / (1 - Math.pow(1 + r, -monthCount))
    return Math.round(res)
  }
}
