import React, { memo, useCallback, useEffect } from "react";
import { StoreContextProps, withStoreContext } from "@/App/HOC/withStoreContext";
import { useQuery } from "@apollo/client";
import { isNullish } from "@/App/utils/utils";
import { ApolloRequest } from "@/App/HOC/ApolloRequest";
import { InitialPaymentDocument, InitialPayment } from "@/App/types/graphql-types";
import { SliderInput } from "@/App/UI/input/SliderInput";
import { baseSliderInput, BaseSliderInputProps } from "@/App/components/inputs/HOC/baseSliderInput";

type Props = {
  min: number,
  max: number,
  step: number,
  value: number
} & StoreContextProps

const Component: React.FC<Props> = ({ value, dispatch, min, max, step }) => {
	const { loading, error, data } = useQuery<{ initialPayment: InitialPayment }>(InitialPaymentDocument);

	const onChange = useCallback((value: number) => {
		dispatch({ type: "INITIAL_PAYMENT_VALUE", payload: value });
	}, []);

	useEffect(() => {
		if (isNullish(data?.initialPayment)) return;

		dispatch({ type: "INITIAL_PAYMENT", payload: data?.initialPayment });
	}, [data?.initialPayment]);

	return (
		<ApolloRequest value={ value } loading={ loading } error={ error }>
			<SliderInput
				value={ value }
				max={ max }
				min={ min }
				step={ step }
				label="Первоначальный взнос"
				onChange={ onChange }
			/>
		</ApolloRequest>
	);
};

const optimization = (prevProps: BaseSliderInputProps, nextProps: BaseSliderInputProps): boolean => {
	return (prevProps.state.initialPayment.value === nextProps.state.initialPayment.value);
};

export const InitialPaymentInput =
  withStoreContext(
  	baseSliderInput(
  		memo(Component, optimization),
  		"initialPayment"
  	)
  );
