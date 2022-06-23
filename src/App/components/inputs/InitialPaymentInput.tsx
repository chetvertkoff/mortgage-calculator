import React, { memo, useCallback, useEffect } from "react";
import { StoreContextProps, withStoreContext } from "@/App/HOC/withStoreContext";
import { useQuery } from "@apollo/client";
import { isNullish } from "@/App/utils/utils";
import { ApolloRequest } from "@/App/HOC/ApolloRequest";
import { InitialPaymentDocument, InitialPayment } from "@/App/types/graphql-types";
import { SliderInput } from "@/App/components/UI/input/SliderInput";
import { baseSliderInput, BaseSliderInputProps } from "@/App/HOC/baseSliderInput";
import { actions } from "@/App/store/actions";
import { getInitialPaymentValue } from "@/App/store/selector";

type Props = {
  min: number,
  max: number,
  step: number,
  value: number
} & StoreContextProps & BaseSliderInputProps

const Component: React.FC<Props> = ({ value, dispatch, min, max, step, validate }) => {
	const { loading, error, data } = useQuery<{ initialPayment: InitialPayment }>(InitialPaymentDocument);

	const onChange = useCallback((value: number) => {
		dispatch( actions.setInitialPaymentValue(value));
	}, []);

	useEffect(() => {
		if (isNullish(data)) return;
		dispatch(actions.setInitialPayment(data.initialPayment));
	}, [data?.initialPayment]);

	return (
		<ApolloRequest value={ value } loading={ loading } error={ error }>
			<SliderInput
				value={ value }
				max={ max }
				min={ min }
				step={ step }
				label="Первоначальный взнос"
				validate={ validate }
				inputName="InitialPaymentInput"
				onChange={ onChange }
				mask
			/>
		</ApolloRequest>
	);
};

const optimization = (prevProps: BaseSliderInputProps, nextProps: BaseSliderInputProps) => (
	getInitialPaymentValue(prevProps.state) === getInitialPaymentValue(nextProps.state)
);

export const InitialPaymentInput =
  withStoreContext(
  	baseSliderInput(
  		memo(Component, optimization),
  		"initialPayment"
  	)
  );
