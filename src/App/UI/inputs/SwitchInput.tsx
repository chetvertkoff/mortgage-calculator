import React, { useCallback, useMemo } from "react";
import { baseInput, BaseInputProps } from "@/App/HOC/baseInput";
import { FormControl, FormControlLabel, Switch } from "@mui/material";
import { isNotEmpty } from "@/App/utils/utils";

export const SwitchInput: React.FC<BaseInputProps> = baseInput((
	{ label, value = false, onChange, getValue, itemValue }
) => {

	const val = useMemo(() => (
		(isNotEmpty(value) && isNotEmpty(itemValue) ? (value[itemValue] || 0) : value)
	), [value]);

	return (
		<FormControl fullWidth sx={ { m: 1, minWidth: 120 } }>
			<FormControlLabel
				control={
					<Switch
						checked={ val }
						onChange={ e => onChange(e.target.checked) }
					/>
				}
				label={ label }
			/>
		</FormControl>
	);
});
