import React, { memo, useCallback, useEffect } from "react";
import { SelectItemInput } from "@/App/components/UI/input/SelectItemInput";
import { useQuery } from "@apollo/client";
import { ApolloRequest } from "@/App/HOC/ApolloRequest";
import { LoanReasonsListDocument, LoanReasonList, LoanReason } from "@/App/types/graphql-types";
import { StoreContextProps, withStoreContext } from "@/App/HOC/withStoreContext";
import { Box, Typography } from "@mui/material";
import { actions } from "@/App/store/actions";
import { getLoanReasonValueRate } from "@/App/store/selector";

const Component: React.FC<StoreContextProps> = ({ state: { calcEntity }, dispatch }) => {
	const { loading, error, data } = useQuery<{ loanReasonsList: LoanReasonList }>(LoanReasonsListDocument);

	const renderCustomItem = (item: LoanReason) => (
		<Box className='LoanReasonInput__menuItem'>
			<Typography>{ item.name }</Typography>
			<Typography>от { item.rate } %</Typography>
		</Box>
	);

	const onChange = useCallback((val: LoanReason) => {
		dispatch(actions.setLoanReasonValue(val));
	}, [calcEntity.loanReason.value]);

	useEffect(() => {
		dispatch(actions.setLoanReasonList(data?.loanReasonsList.list ?? []));
	}, [data?.loanReasonsList.list]);

	return (
		<ApolloRequest value={ calcEntity.loanReason.list?.length } error={ error } loading={ loading }>
			<SelectItemInput
				items={ calcEntity.loanReason.list }
				value={ calcEntity.loanReason.value }
				itemValue="id"
				itemText="name"
				label="Цель кредита"
				returnObject
				onChange={ onChange }
				customItem={ renderCustomItem }
			/>
		</ApolloRequest>
	);
};

const optimization = (prevProps: StoreContextProps, nextProps: StoreContextProps) =>
	(getLoanReasonValueRate(prevProps.state) === getLoanReasonValueRate(nextProps.state));

export const LoanReasonInput = withStoreContext(memo(Component, optimization));
