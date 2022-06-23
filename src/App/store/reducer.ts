import { ActionReducer } from "@/App/types/types";
import { ICalculatorUseCase } from "@/Domain/CalculatorUseCase";
import { ActionConstants } from "@/App/store/constants";
import { Chart } from "@/Domain/Chart";

export const initialState: ICalcState = {
	calcEntity: {
		annuitet: 0,
		totalRate: 0,
		totalSum: 0,
		shouldEarn: 0,
		overpayment: 0,
		loanReason: {
			value: {
				name: "",
				rate: 0
			},
			list: []
		},
		hasSalaryCard: {
			selected: false,
			rateText: "",
			rate: 0
		},
		houseCost: {
			min: 0,
			max: 0,
			step: 0,
			value: 0
		},
		initialPayment: {
			min: 0,
			max: 0,
			step: 0,
			value: 0
		},
		loanPeriod: {
			min: 0,
			max: 0,
			step: 0,
			value: 0
		},
	},
	isInvalid: false,
	chartList: []
};

type Range = {
  min: number
  max: number
  step: number
  value: number
}

interface ICalcEntity {
  annuitet: number
  totalRate: number
  totalSum: number
  shouldEarn: number
  overpayment: number
  loanReason: {
    value: {
      name: string
      rate: number
    }
    list: Array<ICalcEntity["loanReason"]["value"]>
  }
  hasSalaryCard: {
    selected: boolean
    rateText: string
    rate: number
  }
  houseCost: Range
  initialPayment: Range
  loanPeriod: Range
}

export interface ICalcState {
  calcEntity: ICalcEntity
  isInvalid: boolean
  chartList: Chart[]
}

export interface Payload extends ICalculatorUseCase {
  isInvalid: boolean
  chartListArr: Chart[]
}

export const reducer = (state: ICalcState = initialState, action: ActionReducer<Payload>): ICalcState => {
	const { payload, type } = action;

	switch (type) {
	case ActionConstants.SET_CALC_ENTITY:
		return {
			...state,
			calcEntity: {
				loanReason: {
					list: payload.loanReasonList.list,
					value: payload.loanReasonList.value
				},
				houseCost: { ...payload.houseCost },
				hasSalaryCard: { ...payload.hasSalaryCard },
				initialPayment: { ...payload.initialPayment },
				loanPeriod: { ...payload.loanPeriod },
				annuitet: payload.annuitet,
				totalRate: payload.totalRate,
				totalSum: payload.totalSum,
				shouldEarn: payload.shouldEarn,
				overpayment: payload.overpayment,
			}
		};
	case ActionConstants.SET_IS_INVALID:
		return {
			...state,
			isInvalid: payload.isInvalid
		};
	case ActionConstants.SET_CHARTLIST:
		return {
			...state,
			chartList: payload.chartListArr
		};
	default:
		return state;
	}
};
