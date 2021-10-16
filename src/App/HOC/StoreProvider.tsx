import React, { ReactNode } from 'react';
import { ICalculatorUseCase } from '@/Domain/CalculatorUseCase';

export const Context = React.createContext({});

export const StoreProvider: React.FC<{ children: ReactNode, value: ICalculatorUseCase }> = (
  { children, value },
) => (<Context.Provider value={ value }>{children}</Context.Provider>);
