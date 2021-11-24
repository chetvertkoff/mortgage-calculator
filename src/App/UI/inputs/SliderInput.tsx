import React, { useCallback } from 'react';
import { baseInput, BaseInputProps } from '@/App/HOC/baseInput';
import { Box, FormControl, Slider, TextField, Typography } from "@mui/material";
import { formatNum, shortNumCurrency } from "@/App/utils/format";

export type SliderInputProps = {
  min: number,
  max: number,
  value: number,
  step: number
}

export const SliderInput: React.FC<BaseInputProps & SliderInputProps> = baseInput( (
	{ label, value, max, min, step, onChange }: BaseInputProps & SliderInputProps
) => {

	const onSliderChange = useCallback((e: Event, newVal: typeof value[] | typeof value) => {
		if(newVal === value) return;
		onChange(newVal);
	}, [onChange]);

	const onTextFieldChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(+e.target.value);
	}, [onChange]);

	const formatSliderValue = (sliderVal: typeof value): string => (`${formatNum(sliderVal)} ₽`);

	return (
		<FormControl fullWidth sx={ { m: 1, minWidth: 120 } }>
			<TextField
				data-testid="slider-input__text-field"
				required
				value={ value }
				label={ label }
				type="number"
				variant="outlined"
				onChange={ onTextFieldChange }
			/>
			<Slider
				data-testid="slider-input__slider"
				sx={ { paddingTop: 0 } }
				value={ value }
				max={ max }
				min={ min }
				step={ step }
				valueLabelDisplay="auto"
				valueLabelFormat={ formatSliderValue }
				onChange={ onSliderChange }
			/>
			<Box sx={ { display: "flex", justifyContent: "space-between" } }>
				<Typography>{ shortNumCurrency(min) }</Typography>
				<Typography>{ shortNumCurrency(max) }</Typography>
			</Box>
		</FormControl>
	);
});
