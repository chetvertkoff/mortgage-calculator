import React, { useEffect } from 'react';
import { LoanReasonInput } from "@/App/components/inputs/LoanReasonInput";
import { HasSalaryCardInput } from "@/App/components/inputs/HasSalaryCardInput";
import { HouseCostInput } from "@/App/components/inputs/HouseCostInput";

export const CalculatorForm: React.FC = () => {
	return (
		<form>
			<LoanReasonInput />
			<HasSalaryCardInput />
			<HouseCostInput />
		</form>
	);
};
