import { ICalculatorUseCase } from "@/Domain/CalculatorUseCase";

export class CalculatorViewModel {

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

  public static fromModel(entity: ICalculatorUseCase): CalculatorViewModel {
  	const state = new this();

  	Object.assign(state, {
  		loanReason: entity.loanReasonList.value,
  		houseCost: entity.houseCost.value,
  		hasSalaryCard: entity.hasSalaryCard,
  		initialPayment: entity.initialPayment,
  		loanPeriod: entity.loanPeriod,
  		annuitet: entity.annuitet
  	});

  	return state;
  }
}
