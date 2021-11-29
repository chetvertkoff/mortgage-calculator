import React, { memo, useCallback } from "react";
import { SelectItemInput } from "@/App/UI/inputs/SelectItemInput";
import { useQuery } from "@apollo/client";
import { ApolloRequest } from "@/App/HOC/ApolloRequest";
import { LoanReasonsListDocument, LoanReasonList, LoanReason } from "@/App/types/graphql-types";
import { StoreContextProps, withStoreContext } from "@/App/HOC/withStoreContext";

const Component: React.FC<StoreContextProps> = ({ state, dispatch }) => {
	const { loading, error, data } = useQuery<{ loanReasonsList: LoanReasonList }>(LoanReasonsListDocument);

	const onChange = useCallback((val: LoanReason) => {
		dispatch({ type: "LOAN_REASON", payload: val });
	}, [state.loanReason]);

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
			/>
		</ApolloRequest>
	);
};

export const LoanReasonInput = withStoreContext(memo(Component));
