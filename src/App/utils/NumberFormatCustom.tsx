import React from "react";
import NumberFormat from "react-number-format";

interface NumberFormatCustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  value: number;
}

// @ts-ignore
export const NumberFormatCustom = React.forwardRef<NumberFormat, NumberFormatCustomProps>(
	function NumberFormatCustom(props, ref) {
		const { onChange, value, ...other } = props;

		return (
			<NumberFormat
				{ ...other }
				getInputRef={ ref }
				onValueChange={ (values) => {
					if (value === +values.value) return;

					onChange({
						target: {
							name: props.name,
							value: values.value,
						},
					});
				} }
				value={ value }
				thousandSeparator={ " " }
				isNumericString
				mask={ " " }
			/>
		);
	},
);
