import { ICalculatorUseCase } from "@/Domain/CalculatorUseCase";

export class CalculatorViewModel {
  public loanReason = {
  	id: null,
  	name: '',
  	rate: 0,
  }

  public houseCost = 0

  public hasSalaryCard = 0

  public static fromModel(entity: ICalculatorUseCase): CalculatorViewModel {
  	const state = new this();

  	Object.assign(state, {
  		houseCost: entity.houseCost.value,
  		hasSalaryCard: entity.hasSalaryCard.value
  	});

  	return state;
  }
}
