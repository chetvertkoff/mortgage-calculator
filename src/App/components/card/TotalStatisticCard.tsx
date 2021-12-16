import React from "react";
import { StoreContextProps, withStoreContext } from "@/App/HOC/withStoreContext";
import { Grid, Typography } from "@mui/material";
import { formatNum, roundFormat } from "@/App/utils/format";

export const Component: React.FC<StoreContextProps> = ({ state }) => (
	<Grid container spacing={ 3 } sx={ { pb: 2 } }>
		<Grid item xs={ 6 }>
			<Typography variant="h6" sx={ { color: "text.grey" } }>Ежемесячный платеж</Typography>
			<Typography variant="h4">{ roundFormat(state.annuitet) } ₽</Typography>
		</Grid>
		<Grid item xs={ 6 }>
			<Typography variant="h6" sx={ { color: "text.grey" } }>Процентная ставка</Typography>
			<Typography variant="h4" sx={ { color: "text.lightBlue" } }>{ state.totalRate } %</Typography>
		</Grid>
		<Grid item xs={ 5 }>
			<Typography variant="h6" sx={ { color: "text.grey" } }>Сумма кредита</Typography>
			<Typography variant="h5">{ formatNum(state.totalSum )} ₽</Typography>
		</Grid>
		<Grid item xs={ 6 }>
			<Typography variant="h6" sx={ { color: "text.grey" } }>Необходимый доход</Typography>
			<Typography variant="h5">{ formatNum(state.shouldEarn) } ₽</Typography>
		</Grid>
	</Grid>
);

export const TotalStatisticCard = withStoreContext(Component);
