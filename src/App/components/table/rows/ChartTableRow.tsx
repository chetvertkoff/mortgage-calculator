import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { Chart } from "@/Domain/Chart";
import { formatNum, roundFormat } from "@/App/utils/format";

type Props = {
  item: Chart
}

export const ChartTableRow: React.FC<Props> = ({ item }) => {
	return (
		<>
			{
				item.year
					? (<TableRow>
						<TableCell colSpan={ Object.keys(item).length }>
							{ item.year }
						</TableCell>
					</TableRow>)
					: null
			}
			<TableRow
				sx={ { "&:last-child td, &:last-child th": { border: 0 } } }
			>
				<TableCell>{ item.month }</TableCell>
				<TableCell>{ roundFormat(item.annuitet) } ₽</TableCell>
				<TableCell>{ formatNum(item.rateSum) } ₽</TableCell>
				<TableCell>{ formatNum(item.loanSum) } ₽</TableCell>
				<TableCell>{ formatNum(item.leftToPay) } ₽</TableCell>
			</TableRow>
		</>
	);
};
