import React, { useContext } from 'react';
import { baseInput, BaseInputProps } from '@/App/HOC/baseInput';
import { LoanReasonList } from "@/Domain/LoanReasonList";
import { CalcStoreProvider } from "@/App/store/CalcStoreProvider";

type SelectItemInputProps = BaseInputProps & { data: LoanReasonList };

export const SliderInput: React.FC<SelectItemInputProps> = baseInput( ({ data }) => {
	const { state } = useContext(CalcStoreProvider);
	return (
		<>
			{ state.houseCost }
			<Select
				variant="outlined"
			>
				<MenuItem value={ 10 }>Ten</MenuItem>
			</Select>
		</>
	);
});
