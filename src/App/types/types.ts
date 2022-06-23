import React, { Dispatch } from "react";
import { ICalcState, Payload } from "@/App/store/reducer";

export type Nullable = null | undefined;

// |"HOUSE_COST"
// |"HOUSE_COST_VALUE"
// |"LOAN_REASON_VALUE"
// |"LOAN_REASON_LIST"
// |"HAS_SALARY_CARD"
// |"HAS_SALARY_CARD_SELECTED"
// |"INITIAL_PAYMENT"
// |"INITIAL_PAYMENT_VALUE"
// |"LOAN_PERIOD"
// |"LOAN_PERIOD_VALUE"
// |"GET_CHART_LIST"
// |"IS_INVALID";

export interface CalcContext <State = any>{
  state: State,
  dispatch: (action: ActionReducer<Payload>) => void
}

export type Middleware = <State, Action = ActionReducer>(
  dispatch: Dispatch<Action>,
  state: State
) => Dispatch<Action>

export interface ActionReducer <T = any>{
  type: string,
  payload: T
}

export type CalcReducer<T> = (state: T, action: ActionReducer) => T

export type ChangeInputEvent<T> =
  | Event & { target: { value: T, name: string } }
  | React.ChangeEvent<HTMLInputElement>

export type BaseEffect = (
  action: ActionReducer,
  dispatch: Dispatch<ActionReducer>,
  state: ICalcState
) => void
