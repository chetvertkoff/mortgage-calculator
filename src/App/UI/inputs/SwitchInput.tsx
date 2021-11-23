import React, { useMemo } from "react";
import { baseInput, BaseInputProps } from "@/App/HOC/baseInput";
import { Box, FormControl, Switch, Typography } from "@mui/material";
import { isNotEmpty } from "@/App/utils/utils";

type SwitchInputProps = {
  prevNode: string,
  value: boolean
}

export const SwitchInput: React.FC<BaseInputProps & SwitchInputProps> = baseInput((
	{ label, value, onChange, itemValue, prevNode }: SwitchInputProps & BaseInputProps
) => {

	const val = useMemo<boolean>(() => (
		(isNotEmpty(value) && isNotEmpty(itemValue) ? (value[itemValue] || 0) : value)
	), [value]);

	return (
		<FormControl fullWidth sx={ { m: 1, minWidth: 120 } }>
			<Box sx={ { display: "flex", alignItems: 'center', justifyContent: 'space-between' } }>
				<Typography>{ prevNode }</Typography>
				<Box sx={ { display: "flex", alignItems: 'center' } }>
					<Typography>{ label }</Typography>
					<Switch
						checked={ val }
						onChange={ e => onChange(e.target.checked) }
					/>
				</Box>
			</Box>
		</FormControl>
	);
});
