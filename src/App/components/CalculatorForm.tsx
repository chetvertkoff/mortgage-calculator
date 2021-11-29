import React from 'react';
import { LoanReasonInput } from "@/App/components/inputs/LoanReasonInput";
import { HasSalaryCardInput } from "@/App/components/inputs/HasSalaryCardInput";
import { HouseCostInput } from "@/App/components/inputs/HouseCostInput";
import { InitialPaymentInput } from "@/App/components/inputs/InitialPaymentInput";
import { LoanPeriodInput } from "@/App/components/inputs/LoanPeriodInput";

export const CalculatorForm: React.FC = () => {
	return (
		<form>
			<LoanReasonInput />
			<HasSalaryCardInput />
			<HouseCostInput />
			<InitialPaymentInput />
			<LoanPeriodInput />
		</form>
	);
};
