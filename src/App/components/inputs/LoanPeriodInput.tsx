import React, { memo, useCallback, useEffect } from "react";
import { StoreContextProps, withStoreContext } from "@/App/HOC/withStoreContext";
import { useQuery } from "@apollo/client";
import { isNullish } from "@/App/utils/utils";
import { ApolloRequest } from "@/App/HOC/ApolloRequest";
import { SliderInput } from "@/App/UI/input/SliderInput";
import { LoanPeriodDocument, LoanPeriod } from "@/App/types/graphql-types";
import { Box, Typography } from "@mui/material";
import { yearPlural } from "@/App/utils/yearPlurals";
import { baseSliderInput } from "@/App/components/inputs/HOC/baseSliderInput";

type Props = {
  min: number,
  max: number,
  step: number,
  value: number
} & StoreContextProps

const Component: React.FC<Props> = ({ value, dispatch, min, max, step }) => {
	const { loading, error, data } = useQuery<{ loanPeriod: LoanPeriod }>(LoanPeriodDocument);

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
		<ApolloRequest value={ value } loading={ loading } error={ error }>
			<SliderInput
				value={ value }
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

export const LoanPeriodInput =
  withStoreContext(
  	baseSliderInput(
  		memo(Component, optimization),
  		"loanPeriod"
  	)
  );
