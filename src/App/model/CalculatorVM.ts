import { ICalculatorUseCase } from "@/Domain/CalculatorUseCase";
import { LoanReasonVM } from "@/App/model/LoanReasonVM";
import { Chart } from "@/Domain/Chart";

export class CalculatorVM {

  public annuitet = 0

  public totalRate = 0

  public totalSum = 0

  public shouldEarn = 0

  public overpayment = 0

  public loanReason = new LoanReasonVM()

  public hasSalaryCard = {
  	selected: false,
  	rateText: "",
  	rate: 0
  }

  public houseCost = {
  	min: 0,
  	max: 0,
  	step: 0,
  	value: 0
  }

  public initialPayment = {
  	min: 0,
  	max: 0,
  	step: 0,
  	value: 0
  }

  public loanPeriod = {
  	min: 0,
  	max: 0,
  	step: 0,
  	value: 0
  }

  public chartList = {
  	getChartlist: (): Promise<void | Chart[]> => Promise.resolve()
  }

  public isInvalid = false;

  public static defaultValue(): CalculatorVM {
  	return new this();
  }

  public static fromModel(entity: ICalculatorUseCase): CalculatorVM {
  	const state = this.defaultValue();

  	Object.assign(state, {
  		loanReason: LoanReasonVM.fromModel({
  			list: entity.loanReasonList.list,
  			value: entity.loanReasonList.value
  		}),
  		houseCost: { ...entity.houseCost },
  		hasSalaryCard: { ...entity.hasSalaryCard },
  		initialPayment: { ...entity.initialPayment },
  		loanPeriod: { ...entity.loanPeriod },
  		annuitet: entity.annuitet,
  		totalRate: entity.totalRate,
  		totalSum: entity.totalSum,
  		shouldEarn: entity.shouldEarn,
  		overpayment: entity.overpayment,
  		chartList: entity.chartList,
  		isInvalid: state.isInvalid
  	});

  	return state;
  }
}
