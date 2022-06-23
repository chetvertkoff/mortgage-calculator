import { ActionConstants } from "@/App/store/constants";
import { LoanReason, HasSalaryCard, HouseCost, InitialPayment, LoanPeriod } from "@/App/types/graphql-types";
import { ActionReducer } from "@/App/types/types";
import { CalculatorUseCase } from "@/Domain/CalculatorUseCase";
import { Chart } from "@/Domain/Chart";

const setCalcEntity = (payload: CalculatorUseCase): ActionReducer<CalculatorUseCase> => ({
	type: ActionConstants.SET_CALC_ENTITY,
	payload
});

const setIsInvalid = (payload: boolean): ActionReducer<{ isInvalid: boolean }> => ({
	type: ActionConstants.SET_IS_INVALID,
	payload: { isInvalid: payload }
});

const setLoanReasonValue = (payload: LoanReason): ActionReducer<LoanReason> => ({
	type: ActionConstants.SET_LOAN_REASON_VALUE,
	payload
});

const setLoanReasonList = (payload: readonly LoanReason[]): ActionReducer<readonly LoanReason[]> => ({
	type: ActionConstants.SET_LOAN_REASON_LIST,
	payload
});

const setHasSalaryCard = (payload: HasSalaryCard): ActionReducer<HasSalaryCard> => ({
	type: ActionConstants.SET_HAS_SALARY_CARD,
	payload
});

const setHasSalaryCardSelected = (payload: boolean): ActionReducer<boolean> => ({
	type: ActionConstants.SET_HAS_SALARY_CARD_SELECTED,
	payload
});

const setHouseCostValue = (payload: number): ActionReducer<number> => ({
	type: ActionConstants.SET_HOUSE_COST_VALUE,
	payload
});

const setHouseCost = (payload: HouseCost): ActionReducer<HouseCost> => ({
	type: ActionConstants.SET_HOUSE_COST,
	payload
});

const setInitialPayment = (payload: InitialPayment): ActionReducer<InitialPayment> => ({
	type: ActionConstants.SET_INITIAL_PAYMENT,
	payload
});

const setInitialPaymentValue = (payload: number): ActionReducer<number> => ({
	type: ActionConstants.SET_INITIAL_PAYMENT_VALUE,
	payload
});

const setLoanPeriod = (payload: LoanPeriod): ActionReducer<LoanPeriod> => ({
	type: ActionConstants.SET_LOAN_PERIOD,
	payload
});

const setLoanPeriodValue = (payload: number): ActionReducer<number> => ({
	type: ActionConstants.SET_LOAN_PERIOD_VALUE,
	payload
});

const setChartList = (payload: Chart[]): ActionReducer<{ chartListArr: Chart[] }> => ({
	type: ActionConstants.SET_CHARTLIST,
	payload: { chartListArr: payload }
});

const getChartList = () => ({
	type: ActionConstants.GET_CHARTLIST
});

export const actions = {
	setCalcEntity,
	setIsInvalid,

	setLoanReasonValue,
	setLoanReasonList,
	setHasSalaryCard,
	setHasSalaryCardSelected,
	setHouseCost,
	setHouseCostValue,
	setInitialPayment,
	setInitialPaymentValue,
	setLoanPeriod,
	setLoanPeriodValue,
	setChartList,
	getChartList
};
