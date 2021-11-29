import React, { ReactNode } from "react";
import { ApolloError } from "@apollo/client";
import { Alert, Box, CircularProgress } from "@mui/material";

type Props = {
  children: ReactNode,
  loading: boolean,
  error?: ApolloError
}

export const ApolloRequest: React.FC<Props> = ({ children, error, loading }) => {
	if (error instanceof ApolloError) return (
		<Alert severity="error">Ошибка загруки данных</Alert>
	);

	if (loading) return (
		<Box sx={ { display: 'flex', justifyContent: 'center' } }>
			<CircularProgress />
		</Box>
	);

	return <>{ children }</>;
};
