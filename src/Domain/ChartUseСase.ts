import { Chart } from "@/Domain/Chart";

export class ChartUseCase {
  totalSum: number;

  annuitet: number;

  loanPeriod: number;

  totalRate: number;

  overpayment: number;

  leftToPay = 0;

  constructor(
  	totalSum: number,
  	totalRate: number,
  	loanPeriod: number,
  	overpayment: number,
  	annuitet: number,
  ) {
  	this.totalSum = totalSum;
  	this.annuitet = annuitet;
  	this.loanPeriod = loanPeriod;
  	this.totalRate = totalRate;
  	this.overpayment = overpayment;
  }

  // общий период (года) в месяцы
  get loanPeriodToMonth(): number {
  	return this.loanPeriod * 12;
  }

  // Месячная ставка
  get monthRate(): number {
  	return this.totalRate / 1200;
  }

  // получить график платежей
  public async getChartlist(): Promise<Chart[] | null> {
  	if (!this.loanPeriod) return null;
  	return this.calcChartList();
  }

  // расчет графика платежей
  private async calcChartList(): Promise<Chart[]> {
  	const loanPeriodMonths = this.loanPeriodToMonth;

  	let now = new Date();

  	return Array.from({ length: loanPeriodMonths }).map((_, i) => {
  		const { current, chartItem } = this.getChartItem(now);

  		if (i === 0) chartItem.year = new Date().getFullYear();
  		now = current;

  		return chartItem;
  	});
  }

  private getChartItem(now: Date): { current: Date, chartItem: Chart } {
  	let current;
  	let chartItem;

  	const { rateSum, mainDebt, leftToPay } = this.calcLeftToPay();

  	if (now.getMonth() === 11) {
  		current = new Date(now.getFullYear() + 1, 0, 1);
  		chartItem = new Chart(
  			current.toLocaleString("ru-RU", { month: "long" }),
  			current.getFullYear(),
  			this.annuitet,
  			rateSum,
  			mainDebt,
  			leftToPay,
  		);
  		return { current, chartItem };
  	}

  	current = new Date(now.getFullYear(), now.getMonth() + 1, 1);

  	chartItem = new Chart(
  		current.toLocaleString("ru-RU", { month: "long" }),
  		0,
  		this.annuitet,
  		rateSum,
  		mainDebt,
  		leftToPay,
  	);

  	return { current, chartItem };
  }

  // Расчет остатка долга
  private calcLeftToPay(): { [n: string]: number } {
  	if (!this.leftToPay) this.leftToPay = this.totalSum;
  	const rateSum = this.leftToPay * this.monthRate;
  	const mainDebt = this.annuitet - rateSum;
  	this.leftToPay -= mainDebt;
  	const { leftToPay } = this;

  	return { rateSum, mainDebt, leftToPay };
  }
}
