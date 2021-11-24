import React, { useCallback, useContext, useEffect, useMemo } from "react";
import { SliderInput } from "@/App/UI/inputs/SliderInput";
import { CalcContext } from "@/App/types/types";
import { CalcStoreProvider } from "@/App/store/CalcStoreProvider";
import { useQuery } from "@apollo/client";
import { HouseCost, HouseCostDocument } from "@/App/types/graphql-types";
import { isNotEmpty, isNullish } from "@/App/utils/utils";
import { ApolloRequest } from "@/App/HOC/ApolloRequest";

export const HouseCostInput: React.FC = (props) => {
	const { state, dispatch } = useContext<CalcContext>(CalcStoreProvider);

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
