import { ActionConstants } from "../constants";
import { initEffects } from "@/App/store/effects/index";
import { ActionReducer, Middleware } from "@/App/types/types";
import calcEntity from "@/Domain/CalculatorUseCase";
import { Dispatch } from "react";
import { actions } from "@/App/store/actions";
import { HasSalaryCard, HouseCost, InitialPayment, LoanPeriod, LoanReason } from "@/App/types/graphql-types";

const effectsCb = (dispatch: Dispatch<ActionReducer>) => {

	const setLoanReasonValue = async (action: ActionReducer<LoanReason>) => {
		calcEntity.loanReasonList.value = { ...action.payload, rateText: "" };
		dispatch(actions.setCalcEntity(calcEntity));
	};

	const setLoanReasonList = async (
		action: ActionReducer<LoanReason[]>,
	) => {
		calcEntity.loanReasonList.list = action.payload.map(item => ({
			...item,
			rateText: ""
		}));
		await setLoanReasonValue(actions.setLoanReasonValue(action.payload[0]));
	};

	const setHasSalaryCard = async (action: ActionReducer<HasSalaryCard>) => {
		calcEntity.hasSalaryCard = {
			selected: false,
			rate: action.payload.rate,
			rateText: "",
			value: 0
		};
		dispatch(actions.setCalcEntity(calcEntity));
	};

	const setHasSalaryCardSelected = async (action: ActionReducer<boolean>) => {
		calcEntity.hasSalaryCard.selected = action.payload;
		dispatch(actions.setCalcEntity(calcEntity));
	};

	const setHouseCostValue = async (action: ActionReducer<number>) => {
		calcEntity.houseCost.value = action.payload;
		dispatch(actions.setCalcEntity(calcEntity));
	};

	const setHouseCost = async (action: ActionReducer<HouseCost>) => {
		calcEntity.houseCost = action.payload;
		dispatch(actions.setCalcEntity(calcEntity));
	};

	const setInitialPayment = async (action: ActionReducer<InitialPayment>) => {
		calcEntity.initialPayment = action.payload;
		dispatch(actions.setCalcEntity(calcEntity));
	};

	const setInitialPaymentValue = async (action: ActionReducer<number>) => {
		calcEntity.initialPayment.value = action.payload;
		dispatch(actions.setCalcEntity(calcEntity));
	};

	const setLoanPeriod = async (action: ActionReducer<LoanPeriod>) => {
		calcEntity.loanPeriod = action.payload;
		dispatch(actions.setCalcEntity(calcEntity));
	};

	const setLoanPeriodValue = async (action: ActionReducer<number>) => {
		calcEntity.loanPeriod.value = action.payload;
		dispatch(actions.setCalcEntity(calcEntity));
	};

	const getChartList = async () => {
		const res = await calcEntity.chartList.getChartlist() ?? [];
		dispatch(actions.setChartList(res));
	};

	return {
		[ActionConstants.SET_LOAN_REASON_VALUE]: setLoanReasonValue,
		[ActionConstants.SET_LOAN_REASON_LIST]: setLoanReasonList,
		[ActionConstants.SET_HAS_SALARY_CARD]: setHasSalaryCard,
		[ActionConstants.SET_HAS_SALARY_CARD_SELECTED]: setHasSalaryCardSelected,
		[ActionConstants.SET_HOUSE_COST]: setHouseCost,
		[ActionConstants.SET_HOUSE_COST_VALUE]: setHouseCostValue,
		[ActionConstants.SET_INITIAL_PAYMENT]: setInitialPayment,
		[ActionConstants.SET_INITIAL_PAYMENT_VALUE]: setInitialPaymentValue,
		[ActionConstants.SET_LOAN_PERIOD]: setLoanPeriod,
		[ActionConstants.SET_LOAN_PERIOD_VALUE]: setLoanPeriodValue,
		[ActionConstants.GET_CHARTLIST]: getChartList,
	};
};

export const effects = initEffects(effectsCb) as Middleware;
