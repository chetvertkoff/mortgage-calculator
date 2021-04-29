import { Entity } from '@/Domain/Entity'
import { LoanPeriod } from '@/Domain/LoanPeriod'
import { InitialPayment } from '@/Domain/InitialPayment'
import { HouseCost } from '@/Domain/HouseCost'
import { LoanReasonList } from '@/Domain/LoanReasonList'
import { HasSalaryCard } from '@/Domain/HasSalaryCard'

export class Calculator extends Entity {

  private _loanReasonList: LoanReasonList = new LoanReasonList()
  private _hasSalaryCard: HasSalaryCard = new HasSalaryCard()
  private _houseCost: HouseCost = new HouseCost()
  private _initialPayment: InitialPayment = new InitialPayment()
  private _loanPeriod: LoanPeriod = new LoanPeriod()

  set loanReasonList (loanReasons: LoanReasonList) {
    this._loanReasonList = new LoanReasonList(loanReasons)
  }

  get loanReasonList (): LoanReasonList {
    return this._loanReasonList
  }

  set hasSalaryCard (hasSalaryCard: HasSalaryCard) {
    this._hasSalaryCard = new HasSalaryCard(hasSalaryCard)
  }

  get hasSalaryCard (): HasSalaryCard {
    return this._hasSalaryCard
  }

  set houseCost (houseCost: HouseCost) {
    this._houseCost = new HouseCost(houseCost)
  }

  get houseCost (): HouseCost {
    return this._houseCost
  }

  set initialPayment (initialPayment: InitialPayment) {
    this._initialPayment = new InitialPayment(initialPayment)
  }

  get initialPayment (): InitialPayment {
    return this._initialPayment
  }

  set loanPeriod (loanPeriod: LoanPeriod) {
    this._loanPeriod = new LoanPeriod(loanPeriod)
  }

  get loanPeriod (): LoanPeriod {
    return this._loanPeriod
  }
}
