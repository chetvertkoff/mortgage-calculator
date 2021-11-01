import React, { useCallback, useContext } from "react";
import { SelectItemInput } from "@/App/UI/inputs/SelectItemInput";
import { useQuery } from "@apollo/client";
import { ApolloRequest } from "@/App/HOC/ApolloRequest";
import { CalcStoreProvider } from "@/App/store/CalcStoreProvider";
import { LoanReasonsListDocument, LoanReasonList, LoanReason } from "@/App/types/graphql-types";
import { CalcContext } from "@/App/types/types";

export const LoanReasonInput: React.FC = () => {

	const { state, dispatch } = useContext<CalcContext>(CalcStoreProvider);

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
