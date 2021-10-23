import { CalculatorViewModel } from "@/App/model/CalculatorViewModel";
import { ICalculatorUseCase } from "@/Domain/CalculatorUseCase";
import { ActionReducer, CalcReducer } from "@/App/types";

export const calcReducer = (calcEntity: ICalculatorUseCase): CalcReducer<CalculatorViewModel> =>
  (state: CalculatorViewModel, action: ActionReducer): CalculatorViewModel  => {
  switch (action.type) {
    case "HOUSE_COST":
      calcEntity.houseCost.value = action.payload;
      return { ...state, houseCost:  calcEntity.houseCost.value };
    default:
      return state;
  }
};
