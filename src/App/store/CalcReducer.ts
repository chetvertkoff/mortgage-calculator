import { CalculatorViewModel } from "@/App/model/CalculatorViewModel";
import { ICalculatorUseCase } from "@/Domain/CalculatorUseCase";
import { ActionReducer, CalcReducer } from "@/App/types/types";

export const calcReducer = (calcEntity: ICalculatorUseCase): CalcReducer<CalculatorViewModel> =>
	(state: CalculatorViewModel, action: ActionReducer): CalculatorViewModel => {
		switch (action.type) {
		case "LOAN_REASON":
			calcEntity.loanReasonList.value = action.payload;
			return { ...state, loanReason: calcEntity.loanReasonList.value };

		case "HAS_SALARY_CARD":
			calcEntity.hasSalaryCard = action.payload;
			return { ...state, hasSalaryCard: { ...calcEntity.hasSalaryCard } };

		case "HAS_SALARY_CARD_SELECTED":
			calcEntity.hasSalaryCard.selected = action.payload;
			return { ...state, hasSalaryCard: { ...calcEntity.hasSalaryCard } };

		case "HOUSE_COST":
			calcEntity.houseCost = action.payload;
			return { ...state, houseCost: calcEntity.houseCost };

		case "HOUSE_COST_VALUE":
			calcEntity.houseCost.value = action.payload;
			return { ...state, houseCost: calcEntity.houseCost };

		case "INITIAL_PAYMENT":
			calcEntity.initialPayment.value = action.payload;
			return { ...state, initialPayment: calcEntity.initialPayment };

		default:
			return state;
		}
	};
