import React, { ComponentType, Dispatch, useContext } from "react";
import { ActionReducer, CalcContext } from "@/App/types/types";
import { CalcStoreProvider } from "@/App/store/CalcStoreProvider";
import { CalculatorVM } from "@/App/model/CalculatorVM";

export type StoreContextProps = {
  state: CalculatorVM,
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
