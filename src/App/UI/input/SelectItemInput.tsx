import React, { ReactNode, useCallback, useMemo } from "react";
import { baseInput, BaseInputProps } from "@/App/HOC/baseInput";
import Select from "@mui/material/Select";
import { FormControl, InputLabel, MenuItem, Typography } from "@mui/material";
import { isNotEmpty } from "@/App/utils/utils";
import { ChangeInputEvent } from "@/App/types/types";

type SelectItemInputProps = {
  customItem?: (item: any) => ReactNode
}

export const SelectItemInput: React.FC<BaseInputProps & SelectItemInputProps> = baseInput(({
	items,
	onChange,
	label,
	value,
	itemValue,
	getItemValue,
	getItemText,
	getValue,
	customItem }: BaseInputProps & SelectItemInputProps
) => {
	const val = useMemo<string>(() => (
  	(isNotEmpty(value) && isNotEmpty(itemValue) ? (value[itemValue] || 0) : value)
	), [itemValue, value]);

	const changeVal = useCallback((e: ChangeInputEvent<typeof val>) => {
		onChange(isNotEmpty(getValue) && getValue(e));
	}, [getValue, onChange]);

	return (
		<FormControl fullWidth sx={ { m: 1, minWidth: 120 } }>
			<InputLabel id="select-item-input-label" > { label } </InputLabel>
			<Select
				data-testid="select-item-input"
				labelId="select-item-input-label"
				label={ label }
				defaultValue=""
				value={ val }
				onChange={ changeVal }
			>
				{
					items?.length && items.map((item, i) => (
						<MenuItem key={ i } value={ getItemValue?.(item) }>
							{ customItem
								? customItem(item)
								: <Typography>{ getItemText?.(item) }</Typography>
							}
						</MenuItem>
					))
				}
			</Select>
		</FormControl>
	);
});
