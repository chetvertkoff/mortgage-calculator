import React, { memo, useCallback, useEffect, useMemo } from "react";
import { SwitchInput } from "@/App/UI/input/SwitchInput";
import { useQuery } from "@apollo/client";
import { HasSalaryCard, HasSalaryCardDocument } from "@/App/types/graphql-types";
import { ApolloRequest } from "@/App/HOC/ApolloRequest";
import { isNullish } from "@/App/utils/utils";
import { StoreContextProps, withStoreContext } from "@/App/HOC/withStoreContext";

export const Component: React.FC<StoreContextProps> = ({ state, dispatch }) => {
	const { loading, error, data } = useQuery<{ hasSalaryCard: HasSalaryCard }>(HasSalaryCardDocument);

	const val = useMemo(() => (state.hasSalaryCard), [state.hasSalaryCard]);

	const onChange = useCallback((val: boolean) => {
		dispatch({ type: "HAS_SALARY_CARD_SELECTED", payload: val });
	}, [state.hasSalaryCard]);

	useEffect(() => {
		if (isNullish(data?.hasSalaryCard)) return;

		dispatch({ type: "HAS_SALARY_CARD", payload: data?.hasSalaryCard });
	}, [data?.hasSalaryCard.rate]);

	return (
		<ApolloRequest value={ val } loading={ loading } error={ error }>
			<SwitchInput
				value={ val.selected }
				prevNode="Есть зарплатная карта"
				label={ val.rateText }
				onChange={ onChange }
			/>
		</ApolloRequest>
	);
};

const optimization = (prevProps: StoreContextProps, nextProps: StoreContextProps): boolean => (
	(prevProps.state.hasSalaryCard.rate === nextProps.state.hasSalaryCard.rate
	&&
	prevProps.state.hasSalaryCard.selected === nextProps.state.hasSalaryCard.selected
	)
);

export const HasSalaryCardInput = withStoreContext(
	memo(Component, optimization)
);
