import React, { memo, useCallback, useEffect, useMemo } from "react";
import { StoreContextProps, withStoreContext } from "@/App/HOC/withStoreContext";
import { useQuery } from "@apollo/client";
import { isNotEmpty, isNullish } from "@/App/utils/utils";
import { ApolloRequest } from "@/App/HOC/ApolloRequest";
import { InitialPaymentDocument, InitialPayment } from "@/App/types/graphql-types";
import { SliderInput } from "@/App/UI/inputs/SliderInput";
import { baseSliderInput, BaseSliderInputProps } from "@/App/components/inputs/HOC/baseSliderInput";

const Component: React.FC<BaseSliderInputProps> = ({ value, dispatch, min, max, step }) => {
	const { loading, error, data } = useQuery<{ initialPayment: InitialPayment }>(InitialPaymentDocument);

	const onChange = useCallback((value: number) => {
		dispatch({ type: "INITIAL_PAYMENT_VALUE", payload: value });
	}, []);

	useEffect(() => {
		if (isNullish(data?.initialPayment)) return;

		dispatch({ type: "INITIAL_PAYMENT", payload: data?.initialPayment });
	}, [data?.initialPayment]);

	return (
		<ApolloRequest loading={ loading } error={ error }>
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
  		'initialPayment'
  	)
  );
