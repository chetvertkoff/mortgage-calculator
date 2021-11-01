import React from 'react';
import { LoanReasonInput } from "@/App/components/inputs/LoanReasonInput";
import { HasSalaryCardInput } from "@/App/components/inputs/HasSalaryCardInput";

export const CalculatorForm: React.FC = () => {

	return (
		<form>
			<LoanReasonInput />
			<HasSalaryCardInput />
		</form>
	);
};
