import React, { memo, useCallback, useEffect } from "react";
import { SelectItemInput } from "@/App/components/UI/input/SelectItemInput";
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
		dispatch({ type: "LOAN_REASON_VALUE", payload: val });
	}, [state.loanReason.value]);

	useEffect(() => {
		if (state.loanReason.value.rate === 0 && data?.loanReasonsList.list.length) { // default value
			dispatch({ type: "LOAN_REASON_LIST", payload: data?.loanReasonsList.list });
			dispatch({ type: "LOAN_REASON_VALUE", payload: data?.loanReasonsList.list[0] });
		}
	}, [data?.loanReasonsList.list]);

	return (
		<ApolloRequest value={ state.loanReason.list?.length } error={ error } loading={ loading }>
			<SelectItemInput
				items={ state.loanReason.list }
				value={ state.loanReason.value }
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

const optimization = (prevProps: StoreContextProps, nextProps: StoreContextProps): boolean => {
	return (
		(prevProps.state.loanReason.value.rate === nextProps.state.loanReason.value.rate)
	);
};

export const LoanReasonInput = withStoreContext(memo(Component, optimization));
