import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { baseInput, BaseInputProps } from "@/App/HOC/baseInput";
import { Box, FormControl, Slider, TextField, Typography } from "@mui/material";
import { formatNum, shortNumCurrency } from "@/App/utils/format";
import { StoreContextProps, withStoreContext } from "@/App/HOC/withStoreContext";

export type SliderInputProps = {
  min: number,
  max: number,
  value: number,
  append?: ReactNode,
  step: number,
  maskComponent?: boolean,
} & StoreContextProps

const Component: React.FC<BaseInputProps & SliderInputProps> = ({
	label, value, max, min, step, onChange, append, maskComponent, validate, inputName
}: BaseInputProps & SliderInputProps ) => {
	const [error, setError] = useState<boolean>(false);

	const [localVal, setLocalVal] = useState<number>(0);

	const setValid = (isErr: boolean) => {
		setError(isErr);
		validate && inputName && validate(inputName, isErr);
	};

	const onSliderChange = useCallback((e: Event, newVal: typeof value[] | typeof value) => {
		if (newVal === value) return;
		onChange(newVal);
		setValid(false);
	}, [onChange]);

	const onTextFieldChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const val = +e.target.value;

		if (isNaN(val)) return;

		if (val > max || val < min) {
			setLocalVal(val);
			setValid(true);
		  return;
		}

		if (val !== value) {
			onChange(val);
		}

		setValid(false);
		setLocalVal(val);
	}, [onChange, max, min]);

	const formatSliderValue = (sliderVal: typeof value): string => (`${formatNum(sliderVal)} ₽`);

	useEffect(() => {
		if (localVal !== value) {
			setLocalVal(value);
		}
	}, [value]);

	return (
		<FormControl fullWidth sx={ { m: 1, minWidth: 120 } }>
			<TextField
				error={ error }
				data-testid="slider-input__text-field"
				required
				value={ localVal }
				label={ label }
				variant="outlined"
				onChange={ onTextFieldChange }
				InputProps={ maskComponent as any }
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
			{
				append ?? (
					<Box sx={ { display: "flex", justifyContent: "space-between" } }>
						<Typography>{ shortNumCurrency(min) }</Typography>
						<Typography>{ shortNumCurrency(max) }</Typography>
					</Box>
				)
			}
		</FormControl>
	);
};

export const SliderInput = withStoreContext(baseInput(Component));
