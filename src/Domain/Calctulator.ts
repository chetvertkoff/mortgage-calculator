import { Entity } from '@/Domain/Entity'
import { LoanPeriod } from '@/Domain/LoanPeriod'
import { InitialPayment } from '@/Domain/InitialPayment'
import { HouseCost } from '@/Domain/HouseCost'
import { LoanReasons } from '@/Domain/LoanReasons'

export class Calculator extends Entity {
  private _loanReasons: LoanReasons[] = [new LoanReasons()]
  private _hasSalaryCard = true
  private _houseCost: HouseCost = new HouseCost()
  private _initialPayment: InitialPayment = new InitialPayment()
  private _loanPeriod: LoanPeriod = new LoanPeriod()

  set loanReasons (loanReasons: LoanReasons[]) {
    this._loanReasons = loanReasons.map(el => new LoanReasons(el))
  }

  get loanReasons (): LoanReasons[] {
    return this._loanReasons
  }
}
