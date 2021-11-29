import React, { memo, useCallback, useEffect, useMemo } from "react";
import { SliderInput } from "@/App/UI/inputs/SliderInput";
import { useQuery } from "@apollo/client";
import { HouseCost, HouseCostDocument } from "@/App/types/graphql-types";
import { isNotEmpty, isNullish } from "@/App/utils/utils";
import { ApolloRequest } from "@/App/HOC/ApolloRequest";
import { StoreContextProps, withStoreContext } from "@/App/HOC/withStoreContext";

const Component: React.FC<StoreContextProps> = ({ state, dispatch }) => {
	const { loading, error, data } = useQuery<{ houseCost: HouseCost }>(HouseCostDocument);

	const val = useMemo<number>(() => ((
		isNotEmpty(state.houseCost.value) ? state.houseCost.value : 0
	)), [state.houseCost.value]);

	const max = useMemo<number>(() => ((
		isNotEmpty(state.houseCost.max) ? state.houseCost.max : 0
	)), [state.houseCost.max]);

	const min = useMemo<number>(() => ((
		isNotEmpty(state.houseCost.min) ? state.houseCost.min : 0
	)), [state.houseCost.min]);

	const step = useMemo<number>(() => ((
		isNotEmpty(state.houseCost.step) ? state.houseCost.step : 0
	)), [state.houseCost.step]);

	const onChange = useCallback((value: number) => {
		dispatch({ type: "HOUSE_COST_VALUE", payload: value });
	}, []);

	useEffect(() => {
		if (isNullish(data?.houseCost)) return;

		dispatch({ type: "HOUSE_COST", payload: data?.houseCost });
	}, [data?.houseCost]);

	return (
		<ApolloRequest loading={ loading } error={ error }>
			<SliderInput
				value={ val }
				max={ max }
				min={ min }
				step={ step }
				label="Стоимость недвижимости"
				onChange={ onChange }
			/>
		</ApolloRequest>
	);
};

const optimization = (prevProps: StoreContextProps, nextProps: StoreContextProps): boolean => {
	return (prevProps.state.houseCost.value === nextProps.state.houseCost.value);
};

export const HouseCostInput = withStoreContext(memo(Component, optimization));
