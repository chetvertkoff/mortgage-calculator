import React, { ComponentType, Dispatch, useContext } from "react";
import { CalcContext } from "@/App/types/types";
import { CalcStoreProvider } from "@/App/HOC/CalcStoreProvider";
import { ICalcState } from "@/App/store/reducer";

export type StoreContextProps = {
  state: ICalcState,
  dispatch: Dispatch<any>
}

export const withStoreContext = <P extends CalcContext>(Component: ComponentType<P>) =>
	(props: Omit<P, keyof CalcContext>) => {
		const { state, dispatch } = useContext<CalcContext<ICalcState>>(CalcStoreProvider);

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
