import React, {
	DispatchWithoutAction,
	ProviderProps,
	ReactElement,
	ReactNode,
	ReducerStateWithoutAction,
	useReducer
} from "react";
import { ActionReducer, CalcContext, Middleware } from "@/App/types/types";
import { ICalcState, initialState, Payload, reducer } from "@/App/store/reducer";

export const CalcStoreProvider = React.createContext<CalcContext<ICalcState>>({
	state: initialState,
	dispatch: () => null
});

export const initStore = (middlewares: Array<Middleware> = []) => ({ children }: { children: ReactNode }):
  ReactElement<ProviderProps<[ReducerStateWithoutAction<any>, DispatchWithoutAction]>> => {

	const [state, dispatch] = useReducer(reducer, initialState);

	const subscribedMiddlewares = [...middlewares].map(cb => cb(dispatch, state));

	const dispatchObserver = (action: ActionReducer<Payload>) => {
		[...subscribedMiddlewares, dispatch].forEach(dsptch => {
			dsptch(action);
		});
	};

	return (
		<CalcStoreProvider.Provider value={ { state, dispatch: dispatchObserver } }>
			{children}
		</CalcStoreProvider.Provider>
	);
};
