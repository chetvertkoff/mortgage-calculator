import { Chart } from '@/Domain/Chart'

export class ChartUseCase {
  static months = ['Январь', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  totalSum: number
  annuitet: number
  loanPeriod: number
  totalRate: number
  overpayment: number

  constructor (totalSum: number, totalRate: number, loanPeriod: number, overpayment: number, annuitet: number) {
    this.totalSum = totalSum
    this.annuitet = annuitet
    this.loanPeriod = loanPeriod
    this.totalRate = totalRate
    this.overpayment = overpayment
  }

  // график платежей
  get list (): Chart[] | unknown {
    if (!this.loanPeriod) return
    return this.calcChartList()
  }

  // общий период (года) в месяцы
  get loanPeriodToMonth (): number {
    return this.loanPeriod * 12
  }

  // расчет графика платежей
  private calcChartList (): Chart[] | any {
    const loanPeriodMonths = this.loanPeriodToMonth

    let now = new Date()
    return Array.from({ length: loanPeriodMonths }).map(_ => {
      let current
      let chartItem
      if (now.getMonth() == 11) {
        current = new Date(now.getFullYear() + 1, 0, 1)
        chartItem = new Chart(
          current.toLocaleString('ru-RU', { month: 'long' }),
          current.getFullYear(),
          this.annuitet
        )
      } else {
        current = new Date(now.getFullYear(), now.getMonth() + 1, 1)
        chartItem = new Chart(
          current.toLocaleString('ru-RU', { month: 'long' }),
          0,
          this.annuitet
        )
      }

      now = current
      return chartItem
    })
  }
}
