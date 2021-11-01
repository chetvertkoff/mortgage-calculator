import React from "react";
import { baseInput, BaseInputProps } from "@/App/HOC/baseInput";
import { FormControl, FormControlLabel, Switch } from "@mui/material";

export const SwitchInput: React.FC<BaseInputProps> = baseInput((
	{ label, value = false, onChange }
) => {

	return (
		<FormControl fullWidth sx={ { m: 1, minWidth: 120 } }>
			<FormControlLabel
				control={
					<Switch
						checked={ value }
						onChange={ onChange }
					/>
				}
				label={ label }
			/>
		</FormControl>
	);
});
