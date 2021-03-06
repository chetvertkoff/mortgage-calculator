import React, { memo, useCallback, useEffect } from "react";
import { StoreContextProps, withStoreContext } from "@/App/HOC/withStoreContext";
import { useQuery } from "@apollo/client";
import { isNullish } from "@/App/utils/utils";
import { ApolloRequest } from "@/App/HOC/ApolloRequest";
import { SliderInput } from "@/App/components/UI/input/SliderInput";
import { LoanPeriodDocument, LoanPeriod } from "@/App/types/graphql-types";
import { Box, Typography } from "@mui/material";
import { yearPlural } from "@/App/utils/yearPlurals";
import { baseSliderInput, BaseSliderInputProps } from "@/App/HOC/baseSliderInput";
import { getLoanPeriodValue } from "@/App/store/selector";
import { actions } from "@/App/store/actions";

type Props = {
  min: number,
  max: number,
  step: number,
  value: number
} & StoreContextProps & BaseSliderInputProps

const Component: React.FC<Props> = ({ value, dispatch, min, max, step, validate }) => {
	const { loading, error, data } = useQuery<{ loanPeriod: LoanPeriod }>(LoanPeriodDocument);

	const onChange = useCallback((value: number) => {
		dispatch( actions.setLoanPeriodValue(value));
	}, []);

	useEffect(() => {
		if (isNullish(data)) return;
		dispatch( actions.setLoanPeriod(data.loanPeriod));
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
				validate={ validate }
				inputName="LoanPeriodInput"
				onChange={ onChange }
				append={ append }
			/>
		</ApolloRequest>
	);
};

const optimization = (prevProps: StoreContextProps, nextProps: StoreContextProps) => (
	 getLoanPeriodValue(prevProps.state) === getLoanPeriodValue(nextProps.state)
);

export const LoanPeriodInput =
  withStoreContext(
  	baseSliderInput(
  		memo(Component, optimization),
  		"loanPeriod"
  	)
  );
