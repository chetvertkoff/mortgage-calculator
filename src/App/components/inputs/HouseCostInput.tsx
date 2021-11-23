import React, { useCallback, useContext, useEffect, useMemo } from "react";
import { SliderInput } from "@/App/UI/inputs/SliderInput";
import { CalcContext } from "@/App/types/types";
import { CalcStoreProvider } from "@/App/store/CalcStoreProvider";
import { useQuery } from "@apollo/client";
import { HouseCost, HouseCostDocument } from "@/App/types/graphql-types";
import { isNullish } from "@/App/utils/utils";
import { ApolloRequest } from "@/App/HOC/ApolloRequest";

export const HouseCostInput: React.FC = (props) => {
	const { state, dispatch } = useContext<CalcContext>(CalcStoreProvider);

	const { loading, error, data } = useQuery<{ houseCost: HouseCost }>(HouseCostDocument);

	const val = useMemo(() => ({
		max: state.houseCost.max,
		min: state.houseCost.min,
		step: state.houseCost.step,
		value: state.houseCost.value
	}), [state.houseCost.value]);

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
				label="Стоимость недвижимости"
				onChange={ onChange }
			/>
		</ApolloRequest>
	);
};
