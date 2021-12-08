import React from "react";
import { StoreContextProps, withStoreContext } from "../HOC/withStoreContext";
import { Grid, Typography } from "@mui/material";
import { formatNum, roundFormat } from "@/App/utils/format";

export const Component: React.FC<StoreContextProps> = ({ state }) => {
	return (
		<Grid container spacing={ 3 }>
			<Grid item xs={ 2 }>
				<Typography>Сумма кредита</Typography>
				<Typography>{ formatNum(state.totalSum )} ₽</Typography>
			</Grid>
			<Grid item xs={ 2 }>
				<Typography>Процентная ставка</Typography>
				<Typography>{ state.totalRate } %</Typography>
			</Grid>
			<Grid item xs={ 2 }>
				<Typography>Срок кредита</Typography>
				<Typography>{ state.loanPeriod.value } лет</Typography>
			</Grid>
			<Grid item xs={ 2 }>
				<Typography>Срок кредита</Typography>
				<Typography>{ roundFormat(state.overpayment) } ₽</Typography>
			</Grid>
		</Grid>
	);
};

export const ChartHeader = withStoreContext(Component);
