import { ICalculatorUseCase } from "@/Domain/CalculatorUseCase";

export class CalculatorViewModel {

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

  public static fromModel(entity: ICalculatorUseCase): CalculatorViewModel {
  	const state = new this();

  	Object.assign(state, {
  		loanReason: entity.loanReasonList.value,
  		houseCost: entity.houseCost.value,
  		hasSalaryCard: entity.hasSalaryCard,
  		initialPayment: entity.initialPayment,
  		loanPeriod: entity.loanPeriod,
  	});

  	return state;
  }
}
