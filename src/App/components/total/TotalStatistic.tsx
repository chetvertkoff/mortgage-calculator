import React from "react";
import { StoreContextProps, withStoreContext } from "@/App/HOC/withStoreContext";
import { Grid, Typography } from "@mui/material";
import { roundFormat } from "@/App/utils/format";

export const Component: React.FC<StoreContextProps> = ({ state }) => {
	return (
		<Grid container spacing={ 3 } >
			<Grid item xs={ 6 }>
				<Typography>Ежемесячный платеж { roundFormat(state.annuitet) }</Typography>
			</Grid>
			<Grid item xs={ 6 }>
				<Typography>{ state.totalRate }</Typography>
			</Grid>
		</Grid>
	);
};

export const TotalStatistic = withStoreContext(Component);
