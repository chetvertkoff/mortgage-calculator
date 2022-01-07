import React from "react";
import { LoanReasonInput } from "@/App/components/inputs/LoanReasonInput";
import { HasSalaryCardInput } from "@/App/components/inputs/HasSalaryCardInput";
import { HouseCostInput } from "@/App/components/inputs/HouseCostInput";
import { InitialPaymentInput } from "@/App/components/inputs/InitialPaymentInput";
import { LoanPeriodInput } from "@/App/components/inputs/LoanPeriodInput";
import { useFormValidate } from "@/App/hooks/useFormValidate";
import { StoreContextProps, withStoreContext } from "@/App/HOC/withStoreContext";

const inputs = ["HouseCostInput", "InitialPaymentInput", "LoanPeriodInput"];

export const CalculatorForm: React.FC<StoreContextProps> = withStoreContext(({ dispatch }) => {

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
