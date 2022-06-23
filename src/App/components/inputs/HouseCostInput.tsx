import React, { memo, useCallback, useEffect } from "react";
import { SliderInput } from "@/App/components/UI/input/SliderInput";
import { useQuery } from "@apollo/client";
import { HouseCost, HouseCostDocument } from "@/App/types/graphql-types";
import { isNullish } from "@/App/utils/utils";
import { ApolloRequest } from "@/App/HOC/ApolloRequest";
import { StoreContextProps, withStoreContext } from "@/App/HOC/withStoreContext";
import { baseSliderInput, BaseSliderInputProps } from "@/App/HOC/baseSliderInput";
import { actions } from "@/App/store/actions";
import { getHouseCostValue } from "@/App/store/selector";

type Props = {
  min: number,
  max: number,
  step: number,
  value: number
} & StoreContextProps & BaseSliderInputProps

const Component: React.FC<Props> = ({ value, dispatch, min, max, step, validate }) => {
	const { loading, error, data } = useQuery<{ houseCost: HouseCost }>(HouseCostDocument);

	const onChange = useCallback((value: number) => {
		dispatch(actions.setHouseCostValue(value));
	}, []);

	useEffect(() => {
		if (isNullish(data)) return;
		dispatch(actions.setHouseCost(data.houseCost));
	}, [data?.houseCost]);

	return (
		<ApolloRequest value={ value } loading={ loading } error={ error }>
			<SliderInput
				value={ value }
				max={ max }
				min={ min }
				step={ step }
				label="Стоимость недвижимости"
				onChange={ onChange }
				validate={ validate }
				inputName="HouseCostInput"
				mask
			/>
		</ApolloRequest>
	);
};

const optimization = (prevProps: StoreContextProps, nextProps: StoreContextProps): boolean => (
	 getHouseCostValue(prevProps.state) === getHouseCostValue(nextProps.state)
);

export const HouseCostInput =
  withStoreContext(
  	baseSliderInput(
  		memo(Component, optimization),
  		"houseCost"
  	)
  );
