import React, { memo, useCallback, useEffect } from "react";
import { SliderInput } from "@/App/UI/inputs/SliderInput";
import { useQuery } from "@apollo/client";
import { HouseCost, HouseCostDocument } from "@/App/types/graphql-types";
import { isNullish } from "@/App/utils/utils";
import { ApolloRequest } from "@/App/HOC/ApolloRequest";
import { StoreContextProps, withStoreContext } from "@/App/HOC/withStoreContext";
import { baseSliderInput, BaseSliderInputProps } from "@/App/components/inputs/HOC/baseSliderInput";

const Component: React.FC<BaseSliderInputProps> = ({ value, dispatch, min, max, step }) => {
	const { loading, error, data } = useQuery<{ houseCost: HouseCost }>(HouseCostDocument);

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
				value={ value }
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

export const HouseCostInput =
  withStoreContext(
  	baseSliderInput(
  		memo(Component, optimization),
  		'houseCost'
  	)
  );
