import { Calculator } from '@/Domain/Calculator'
import { injectable } from 'inversify'
import { LoanReasonList } from '@/Domain/LoanReasonList'
import { HasSalaryCard } from '@/Domain/HasSalaryCard'
import { HouseCost } from '@/Domain/HouseCost'
import { InitialPayment } from '@/Domain/InitialPayment'
import { LoanPeriod } from '@/Domain/LoanPeriod'

export const CalculatorDI = Symbol.for('CalculatorDI')

export interface ICalculatorUseCase {
  loanReasonList: LoanReasonList
  hasSalaryCard: HasSalaryCard
  houseCost: HouseCost
  initialPayment: InitialPayment
  loanPeriod: LoanPeriod
  totalRate: number
  totalLoanSum: number
}

@injectable()
export class CalculatorUseCase extends Calculator implements ICalculatorUseCase {

  public _totalLoanSum = 0
  public _monthlyPayment = 0

  constructor () {
    super()
  }

  get totalRate(): number {
    return this.calcRate()
  }

  get totalLoanSum(): number {
    return this.calcLoanSum()
  }

  private calcRate(): number {
    return this.loanReasonList.value.rate - this.hasSalaryCard.value
  }

  private calcLoanSum(): number {
    return this.houseCost.value - this.initialPayment.value
  }

}
