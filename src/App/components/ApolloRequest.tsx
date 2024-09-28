import React, { ReactNode } from "react";
import { ApolloError } from "@apollo/client";
import { Alert, Box, CircularProgress } from "@mui/material";
import { isNullish } from "@/App/utils/utils";

type Props = {
  children: ReactNode,
  loading: boolean,
  value: unknown,
  error?: ApolloError
}

export const ApolloRequest: React.FC<Props> = ({ children, error, loading, value }) => {
	if (error instanceof ApolloError) return (
		<Alert severity="error">Ошибка загруки данных</Alert>
	);

	if (loading || isNullish(value)) return (
		<Box sx={ { display: "flex", justifyContent: "center" } }>
			<CircularProgress />
		</Box>
	);

	return <>{ children }</>;
};
