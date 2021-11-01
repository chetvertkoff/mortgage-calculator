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
import { CalculatorViewModel } from "@/App/model/CalculatorViewModel";
import { CalcContext } from "@/App/types/types";

export const CalcStoreProvider = React.createContext<CalcContext>({
	state: new CalculatorViewModel(),
	dispatch: () => null
});

export const initStore = <T extends ICalculatorUseCase>(entity: T) => ({ children }: { children: ReactNode }):
  ReactElement<ProviderProps<[ReducerStateWithoutAction<any>, DispatchWithoutAction]>> => {
	const initialState = CalculatorViewModel.fromModel(entity);

	const [state, dispatch] = useReducer(calcReducer(entity), initialState);

	return (
		<CalcStoreProvider.Provider value={ { state, dispatch } }>
			{children}
		</CalcStoreProvider.Provider>
	);
};
