import React, { useCallback, useMemo } from 'react';
import { baseInput, BaseInputProps } from '@/App/HOC/baseInput';
import { Box, FormControl, Slider, TextField, Typography } from "@mui/material";
import { isNotEmpty } from "@/App/utils/utils";
import { formatNum, shortNumCurrency } from "@/App/utils/format";

type SliderInputProps = {
  value: {
    min: number,
    max: number,
    value: number,
    step: number
  }
}

export const SliderInput: React.FC<BaseInputProps & SliderInputProps> = baseInput( (
	{ label, value, onChange }: BaseInputProps & SliderInputProps
) => {
	const val = useMemo<number>(() => ((
		 isNotEmpty(value.value) ? value.value : 0
	)), [value.value]);

	const max = useMemo<number>(() => ((
		isNotEmpty(value.max) ? value.max : 10
	)), [value.max]);

	const min = useMemo<number>(() => ((
		isNotEmpty(value.min) ? value.min : 0
	)), [value.min]);

	const step = useMemo<number>(() => ((
		isNotEmpty(value.step) ? value.step : 1
	)), [value.step]);

	const onSliderChange = useCallback((e: Event, newVal: typeof val[] | typeof val) => {
		onChange(newVal);
	}, [onChange]);

	const onTextFieldChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(+e.target.value);
	}, [onChange]);

	const formatSliderValue = (sliderVal: typeof value.value): string => (`${formatNum(sliderVal)} ₽`);

	return (
		<FormControl fullWidth sx={ { m: 1, minWidth: 120 } }>
			<TextField
				required
				value={ val }
				label={ label }
				type="number"
				variant="outlined"
				onChange={ onTextFieldChange }
			/>
			<Slider
				sx={ { paddingTop: 0 } }
				value={ val }
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
