import React, { ComponentType, Dispatch, useContext } from "react";
import { ActionReducer, CalcContext } from "@/App/types/types";
import { CalcStoreProvider } from "@/App/store/CalcStoreProvider";
import { CalculatorViewModel } from "@/App/model/CalculatorViewModel";

export type StoreContextProps = {
  state: CalculatorViewModel,
  dispatch: Dispatch<ActionReducer>
}

export const withStoreContext = <P extends StoreContextProps>(Component: ComponentType<P>) =>
	(props: Omit<P, keyof StoreContextProps>): JSX.Element => {
		const { state, dispatch } = useContext<CalcContext>(CalcStoreProvider);

		return (
			<>
				<Component
					{ ...props as P }
					state={ state }
					dispatch={ dispatch }
				/>
			</>
		);
	};
