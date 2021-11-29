import React, { useCallback, useEffect, useMemo } from "react";
import { StoreContextProps, withStoreContext } from "@/App/HOC/withStoreContext";
import { useQuery } from "@apollo/client";
import { isNotEmpty, isNullish } from "@/App/utils/utils";
import { ApolloRequest } from "@/App/HOC/ApolloRequest";
import { InitialPaymentDocument, InitialPayment } from "@/App/types/graphql-types";
import { SliderInput } from "@/App/UI/inputs/SliderInput";

const Component: React.FC<StoreContextProps> = ({ state, dispatch }) => {
	const { loading, error, data } = useQuery<{ initialPayment: InitialPayment }>(InitialPaymentDocument);

	const val = useMemo<number>(() => ((
		isNotEmpty(state.initialPayment.value) ? state.initialPayment.value : 0
	)), [state.initialPayment.value]);

	const max = useMemo<number>(() => ((
		isNotEmpty(state.initialPayment.max) ? state.initialPayment.max : 0
	)), [state.initialPayment.max]);

	const min = useMemo<number>(() => ((
		isNotEmpty(state.initialPayment.min) ? state.initialPayment.min : 0
	)), [state.initialPayment.min]);

	const step = useMemo<number>(() => ((
		isNotEmpty(state.initialPayment.step) ? state.initialPayment.step : 0
	)), [state.initialPayment.step]);

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
				value={ val }
				max={ max }
				min={ min }
				step={ step }
				label="Первоначальный взнос"
				onChange={ onChange }
			/>
		</ApolloRequest>
	);
};

export const InitialPaymentInput = withStoreContext(Component);
