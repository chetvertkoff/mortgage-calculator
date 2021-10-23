import React, {
  DispatchWithoutAction,
  ProviderProps,
  ReactElement,
  ReactNode,
  ReducerStateWithoutAction,
  useReducer
} from "react";
import { Calculator } from "@/Domain/Calculator";
import { initReducer } from "@/App/store/CalcReducer";
import { ICalculatorUseCase } from "@/Domain/CalculatorUseCase";
import { CalculatorViewModel } from "@/App/model/CalculatorViewModel";

export const CalcStoreProvider = React.createContext<Calculator | null>(null);

type Props = {
  children: ReactNode
}


export const initStore = <T extends ICalculatorUseCase>(entity: T) =>
  ({ children }: Props): ReactElement<ProviderProps<[ReducerStateWithoutAction<any>, DispatchWithoutAction]>> => {

  const { reducer, initialState } = initReducer(entity);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CalcStoreProvider.Provider value={ { state, dispatch } }>
      {children}
    </CalcStoreProvider.Provider>
  );
};
