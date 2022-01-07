import { CalculatorVM } from "@/App/model/CalculatorVM";
import React, { Dispatch } from "react";

export type Nullable = null | undefined;

export type TypeReducer =
  |"HOUSE_COST"
  |"HOUSE_COST_VALUE"
  |"LOAN_REASON_VALUE"
  |"LOAN_REASON_LIST"
  |"HAS_SALARY_CARD"
  |"HAS_SALARY_CARD_SELECTED"
  |"INITIAL_PAYMENT"
  |"INITIAL_PAYMENT_VALUE"
  |"LOAN_PERIOD"
  |"LOAN_PERIOD_VALUE"
  |"GET_CHART_LIST"
  |"IS_INVALID";

export type CalcContext = {
  state: CalculatorVM,
  dispatch: Dispatch<ActionReducer>
}

export type ActionReducer = {
  type: TypeReducer,
  payload?: any
}

export type CalcReducer<T> = (state: T, action: ActionReducer) => T

export type ChangeInputEvent<T> =
  | Event & { target: { value: T, name: string } }
  | React.ChangeEvent<HTMLInputElement>
