import React, { Dispatch } from "react";
import { LoanReasonInput } from "@/App/components/inputs/LoanReasonInput";
import { HasSalaryCardInput } from "@/App/components/inputs/HasSalaryCardInput";
import { HouseCostInput } from "@/App/components/inputs/HouseCostInput";
import { InitialPaymentInput } from "@/App/components/inputs/InitialPaymentInput";
import { LoanPeriodInput } from "@/App/components/inputs/LoanPeriodInput";
import { useFormValidate } from "@/App/hooks/useFormValidate";
import { withStoreContext } from "@/App/HOC/withStoreContext";
import { ActionReducer } from "@/App/types/types";

const inputs = ["HouseCostInput", "InitialPaymentInput", "LoanPeriodInput"];

type Props = {
  dispatch?: Dispatch<ActionReducer>
}

export const CalculatorForm: React.FC<Props> = withStoreContext(({ dispatch }) => {
	const { validate } = useFormValidate(inputs, dispatch);
	return (
		<form>
			<LoanReasonInput />
			<HasSalaryCardInput />
			<HouseCostInput validate={ validate } />
			<InitialPaymentInput validate={ validate } />
			<LoanPeriodInput validate={ validate } />
		</form>
	);
});
