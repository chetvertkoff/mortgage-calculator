import React, { memo, useCallback, useEffect, useMemo } from "react";
import { StoreContextProps, withStoreContext } from "@/App/HOC/withStoreContext";
import { useQuery } from "@apollo/client";
import { isNotEmpty, isNullish } from "@/App/utils/utils";
import { ApolloRequest } from "@/App/HOC/ApolloRequest";
import { SliderInput } from "@/App/UI/inputs/SliderInput";
import { LoanPeriodDocument, LoanPeriod } from "@/App/types/graphql-types";
import { Box, Typography } from "@mui/material";
import { yearPlural } from "@/App/utils/yearPlurals";

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

	const append = (
		<Box sx={ { display: "flex", justifyContent: "space-between" } }>
			<Typography>{ yearPlural(min) }</Typography>
			<Typography>{ yearPlural(max) }</Typography>
		</Box>
	);

	return (
		<ApolloRequest loading={ loading } error={ error }>
			<SliderInput
				value={ val }
				max={ max }
				min={ min }
				step={ step }
				label="Срок Кредита"
				onChange={ onChange }
				append={ append }
			/>
		</ApolloRequest>
	);
};

const optimization = (prevProps: StoreContextProps, nextProps: StoreContextProps): boolean => {
	return (prevProps.state.loanPeriod.value === nextProps.state.loanPeriod.value);
};

export const LoanPeriodInput = withStoreContext(memo(Component, optimization));
