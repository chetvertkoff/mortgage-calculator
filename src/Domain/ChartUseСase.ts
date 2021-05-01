import { Chart } from '@/Domain/Chart'
import { CalculatorUseCase } from '@/Domain/CalculatorUseCase'

export class ChartUseCase extends Chart {
  // annuitet: number
  // loanPeriod: number
  // rate: number



  constructor (ctx: CalculatorUseCase) {
    super()
    console.log(ctx)
    // this.annuitet = annuitet
    // this.loanPeriod = loanPeriod
    // this.rate = rate
  }



}
