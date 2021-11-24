import React, { useState } from 'react';
import { LoanReasonInput } from "@/App/components/inputs/LoanReasonInput";
import { HasSalaryCardInput } from "@/App/components/inputs/HasSalaryCardInput";
import { HouseCostInput } from "@/App/components/inputs/HouseCostInput";
import { SliderInput } from "@/App/UI/inputs/SliderInput";

export const CalculatorForm: React.FC = () => {
	const [val, setVal] = useState(8);

	return (
		<form>
			<SliderInput
				value={ val }
				min={ 1 }
				max={ 10 }
				step={ 1 }
				label="test label"
				onChange={ val => setVal(val) }
			/>
			<LoanReasonInput />
			<HasSalaryCardInput />
			<HouseCostInput />
		</form>
	);
};
