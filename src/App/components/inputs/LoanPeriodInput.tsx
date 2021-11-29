import React, { useCallback, useEffect, useMemo } from "react";
import { StoreContextProps, withStoreContext } from "@/App/HOC/withStoreContext";
import { useQuery } from "@apollo/client";
import { isNotEmpty, isNullish } from "@/App/utils/utils";
import { ApolloRequest } from "@/App/HOC/ApolloRequest";
import { SliderInput } from "@/App/UI/inputs/SliderInput";
import { LoanPeriodDocument, LoanPeriod } from "@/App/types/graphql-types";

const Component: React.FC<StoreContextProps> = ({ state, dispatch }) => {
	const { loading, error, data } = useQuery<{ loanPeriod: LoanPeriod }>(LoanPeriodDocument);

	const val = useMemo<number>(() => ((
		isNotEmpty(state.loanPeriod.value) ? state.loanPeriod.value : 0
	)), [state.loanPeriod.value]);

	const max = useMemo<number>(() => ((
		isNotEmpty(state.loanPeriod.max) ? state.loanPeriod.max : 0
	)), [state.loanPeriod.max]);

	const min = useMemo<number>(() => ((
		isNotEmpty(state.loanPeriod.min) ? state.loanPeriod.min : 0
	)), [state.loanPeriod.min]);

	const step = useMemo<number>(() => ((
		isNotEmpty(state.loanPeriod.step) ? state.loanPeriod.step : 0
	)), [state.loanPeriod.step]);

	const onChange = useCallback((value: number) => {
		dispatch({ type: "LOAN_PERIOD_VALUE", payload: value });
	}, []);

	useEffect(() => {
		if (isNullish(data?.loanPeriod)) return;

		dispatch({ type: "LOAN_PERIOD", payload: data?.loanPeriod });
	}, [data?.loanPeriod]);

	return (
		<ApolloRequest loading={ loading } error={ error }>
			<SliderInput
				value={ val }
				max={ max }
				min={ min }
				step={ step }
				label="Срок Кредита"
				onChange={ onChange }
			/>
		</ApolloRequest>
	);
};

export const LoanPeriodInput = withStoreContext(Component);
