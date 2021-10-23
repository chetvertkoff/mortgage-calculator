import { CalculatorViewModel } from "@/App/model/CalculatorViewModel";
import { ICalculatorUseCase } from "@/Domain/CalculatorUseCase";

export const initReducer = (calcEntity: ICalculatorUseCase) => {
  const initialState = CalculatorViewModel.fromModel(calcEntity);

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "HOUSE_COST":
        calcEntity.houseCost.value = action.payload;
        return { ...initialState, houseCost:  calcEntity.houseCost.value };
      default:
        return state;
    }
  };

  return { reducer, initialState };
};
