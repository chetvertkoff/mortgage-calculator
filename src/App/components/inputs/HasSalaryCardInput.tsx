import React, { useCallback, useContext, useEffect, useMemo } from "react";
import { SwitchInput } from "@/App/UI/inputs/SwitchInput";
import { CalcContext } from "@/App/types/types";
import { CalcStoreProvider } from "@/App/store/CalcStoreProvider";
import { useQuery } from "@apollo/client";
import { HasSalaryCard, HasSalaryCardDocument } from "@/App/types/graphql-types";
import { CalculatorViewModel } from "@/App/model/CalculatorViewModel";
import { ApolloRequest } from "@/App/HOC/ApolloRequest";
import { isNullish } from "@/App/utils/utils";

export const HasSalaryCardInput: React.FC = (props) => {
	const { state, dispatch } = useContext<CalcContext>(CalcStoreProvider);

	const { loading, error, data } = useQuery<{ hasSalaryCard: HasSalaryCard }>(HasSalaryCardDocument);

	const onChange = useCallback((val: CalculatorViewModel["hasSalaryCard"]) => {
		dispatch({ type: "HAS_SALARY_CARD", payload: val });
	}, [state.hasSalaryCard.selected]);

	const val = useMemo(() => (state.hasSalaryCard.selected), [state.hasSalaryCard.selected]);

	useEffect(() => {
		if (isNullish(data?.hasSalaryCard)) return;

		dispatch({ type: "HAS_SALARY_CARD", payload: data?.hasSalaryCard });
	}, [data?.hasSalaryCard.rate]);

	return (
		<ApolloRequest loading={ loading } error={ error }>
			<SwitchInput
				label="Есть зарплатная карта"
				value={ val }
				onChange={ onChange }
			/>
		</ApolloRequest>
	);
};
