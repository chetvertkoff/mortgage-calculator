import React, { memo, useCallback, useEffect, useMemo } from "react";
import { SwitchInput } from "@/App/components/UI/input/SwitchInput";
import { useQuery } from "@apollo/client";
import { HasSalaryCard, HasSalaryCardDocument } from "@/App/types/graphql-types";
import { ApolloRequest } from "@/App/HOC/ApolloRequest";
import { isNullish } from "@/App/utils/utils";
import { StoreContextProps, withStoreContext } from "@/App/HOC/withStoreContext";
import { actions } from "@/App/store/actions";
import { getHasSalaryCardRate, getHasSalaryCardSelected } from "@/App/store/selector";

const Component: React.FC<StoreContextProps> = ({ state: { calcEntity }, dispatch }) => {
	const { loading, error, data } = useQuery<{ hasSalaryCard: HasSalaryCard }>(HasSalaryCardDocument);

	const val = useMemo(() => (calcEntity.hasSalaryCard), [calcEntity.hasSalaryCard]);

	const onChange = useCallback((val: boolean) => {
		dispatch(actions.setHasSalaryCardSelected(val));
	}, [calcEntity.hasSalaryCard]);

	useEffect(() => {
		if (isNullish(data)) return;
		dispatch(actions.setHasSalaryCard(data.hasSalaryCard));
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

const optimization = (prevProps: StoreContextProps, nextProps: StoreContextProps) => (
	getHasSalaryCardRate(prevProps.state) === getHasSalaryCardRate(nextProps.state)
  &&
  getHasSalaryCardSelected(prevProps.state) === getHasSalaryCardSelected(nextProps.state)
);

export const HasSalaryCardInput = withStoreContext(
	memo(Component, optimization)
);
