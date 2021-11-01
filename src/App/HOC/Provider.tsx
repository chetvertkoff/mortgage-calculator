import React, { ReactNode } from 'react';
import { interfaces } from 'inversify';

export const AppContext = React.createContext<interfaces.Container|null>(null);

type Props = {
  container: interfaces.Container;
  children: ReactNode;
};

export const DiProvider: React.FC<Props> = ({ children, container }: Props) => (
	<AppContext.Provider value={ container }>{children}</AppContext.Provider>);
