import { CalculatorVM } from "@/App/model/CalculatorVM";
import { ICalculatorUseCase } from "@/Domain/CalculatorUseCase";
import { ActionReducer, CalcReducer } from "@/App/types/types";

export const calcReducer = (calcEntity: ICalculatorUseCase): CalcReducer<CalculatorVM> =>
	(state: CalculatorVM, action: ActionReducer): CalculatorVM => {
		switch (action.type) {
		case "LOAN_REASON_VALUE":
			calcEntity.loanReasonList.value = action.payload;
			return CalculatorVM.fromModel(calcEntity);

		case "LOAN_REASON_LIST":
			calcEntity.loanReasonList.list = action.payload;
			return CalculatorVM.fromModel(calcEntity);

		case "HAS_SALARY_CARD":
			calcEntity.hasSalaryCard = action.payload;
			return CalculatorVM.fromModel(calcEntity);

		case "HAS_SALARY_CARD_SELECTED":
			calcEntity.hasSalaryCard.selected = action.payload;
			return CalculatorVM.fromModel(calcEntity);

		case "HOUSE_COST":
			calcEntity.houseCost = action.payload;
			return CalculatorVM.fromModel(calcEntity);

		case "HOUSE_COST_VALUE":
			calcEntity.houseCost.value = action.payload;
			return CalculatorVM.fromModel(calcEntity);

		case "INITIAL_PAYMENT":
			calcEntity.initialPayment = action.payload;
			return CalculatorVM.fromModel(calcEntity);

		case "INITIAL_PAYMENT_VALUE":
			calcEntity.initialPayment.value = action.payload;
			return CalculatorVM.fromModel(calcEntity);

		case "LOAN_PERIOD":
			calcEntity.loanPeriod = action.payload;
			return CalculatorVM.fromModel(calcEntity);

		case "LOAN_PERIOD_VALUE":
			calcEntity.loanPeriod.value = action.payload;
			return CalculatorVM.fromModel(calcEntity);

		default:
			return state;
		}
	};
