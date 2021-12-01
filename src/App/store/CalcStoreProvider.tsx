import React, {
	DispatchWithoutAction,
	ProviderProps,
	ReactElement,
	ReactNode,
	ReducerStateWithoutAction,
	useReducer
} from "react";
import { calcReducer } from "@/App/store/CalcReducer";
import { ICalculatorUseCase } from "@/Domain/CalculatorUseCase";
import { CalculatorVM } from "@/App/model/CalculatorVM";
import { CalcContext } from "@/App/types/types";

export const CalcStoreProvider = React.createContext<CalcContext>({
	state: new CalculatorVM(),
	dispatch: () => null
});

export const initStore = <T extends ICalculatorUseCase>(entity: T) => ({ children }: { children: ReactNode }):
  ReactElement<ProviderProps<[ReducerStateWithoutAction<any>, DispatchWithoutAction]>> => {

	const initialState = CalculatorVM.fromModel(entity);

	const [state, dispatch] = useReducer(calcReducer(entity), initialState);

	return (
		<CalcStoreProvider.Provider value={ { state, dispatch } }>
			{children}
		</CalcStoreProvider.Provider>
	);
};
