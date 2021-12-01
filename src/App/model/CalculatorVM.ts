import { ICalculatorUseCase } from "@/Domain/CalculatorUseCase";

export class CalculatorVM {

  public annuitet = 0

  public totalRate = 0

  public totalSum = 0

  public shouldEarn = 0

  public loanReason = {
  	name: '',
  	rate: 0,
  }

  public hasSalaryCard = {
  	selected: false,
  	rateText: '',
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

  public static defaultValue(): CalculatorVM {
  	return new this();
  }

  public static fromModel(entity: ICalculatorUseCase): CalculatorVM {
  	const state = this.defaultValue();

  	Object.assign(state, {
  		loanReason: { ...entity.loanReasonList.value },
  		houseCost: { ...entity.houseCost },
  		hasSalaryCard: { ...entity.hasSalaryCard },
  		initialPayment: { ...entity.initialPayment },
  		loanPeriod: { ...entity.loanPeriod },
  		annuitet: entity.annuitet
  	});

  	return state;
  }
}
