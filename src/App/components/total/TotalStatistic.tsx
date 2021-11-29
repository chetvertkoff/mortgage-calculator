import React from "react";
import { StoreContextProps, withStoreContext } from "@/App/HOC/withStoreContext";
import { Grid, Typography } from "@mui/material";

export const Component: React.FC<StoreContextProps> = ({ state }) => {
	return (
		<Grid container spacing={ 3 } >
			<Grid item xs={ 6 }>
				<Typography>Ежемесячный платеж { state.annuitet }</Typography>
			</Grid>
			<Grid item xs={ 6 }>
				<Typography>{ }</Typography>
			</Grid>
		</Grid>
	);
};

export const TotalStatistic = withStoreContext(Component);
