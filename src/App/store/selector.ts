import { ICalcState } from "@/App/store/reducer";

export const getLoanReasonValueRate = (state: ICalcState) => state.calcEntity.loanReason.value.rate;
export const getHasSalaryCardRate = (state: ICalcState) => state.calcEntity.hasSalaryCard.rate;
export const getHasSalaryCardSelected = (state: ICalcState) => state.calcEntity.hasSalaryCard.selected;
export const getHouseCostValue = (state: ICalcState) => state.calcEntity.houseCost.value;
export const getInitialPaymentValue = (state: ICalcState) => state.calcEntity.initialPayment.value;
export const getLoanPeriodValue = (state: ICalcState) => state.calcEntity.loanPeriod.value;
