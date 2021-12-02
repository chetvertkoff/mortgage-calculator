import React, { memo, useCallback, useEffect } from "react";
import { SelectItemInput } from "@/App/UI/inputs/SelectItemInput";
import { useQuery } from "@apollo/client";
import { ApolloRequest } from "@/App/HOC/ApolloRequest";
import { LoanReasonsListDocument, LoanReasonList, LoanReason } from "@/App/types/graphql-types";
import { StoreContextProps, withStoreContext } from "@/App/HOC/withStoreContext";
import { Box, Typography } from "@mui/material";

const Component: React.FC<StoreContextProps> = ({ state, dispatch }) => {
	const { loading, error, data } = useQuery<{ loanReasonsList: LoanReasonList }>(LoanReasonsListDocument);

	const customItem = (item: LoanReason) => (
		<Box className='LoanReasonInput__menuItem'>
			<Typography>{ item.name }</Typography>
			<Typography>от { item.rate } %</Typography>
		</Box>
	);

	const onChange = useCallback((val: LoanReason) => {
		dispatch({ type: "LOAN_REASON", payload: val });
	}, [state.loanReason]);

	useEffect(() => {
		if (state.loanReason.rate === 0 && data?.loanReasonsList.list.length) { // default value
			dispatch({ type: "LOAN_REASON", payload: data?.loanReasonsList.list[0] });
		}
	}, [data?.loanReasonsList.list]);

	return (
		<ApolloRequest error={ error } loading={ loading }>
			<SelectItemInput
				items={ data?.loanReasonsList.list }
				value={ state.loanReason }
				itemValue="id"
				itemText="name"
				label="Цель кредита"
				returnObject
				onChange={ onChange }
				customItem={ customItem }
			/>
		</ApolloRequest>
	);
};

const optimization = (prevProps: StoreContextProps, nextProps: StoreContextProps): boolean => (
	(prevProps.state.loanReason.rate === nextProps.state.loanReason.rate)
);

export const LoanReasonInput = withStoreContext(memo(Component, optimization));
