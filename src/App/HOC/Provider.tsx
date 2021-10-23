import React, { ReactNode } from 'react';
import { interfaces } from 'inversify';
import { Context } from "@/App/HOC/Context";

export const AppContext = Context;

type Props = {
  container: interfaces.Container;
  children: ReactNode;
};

export const DiProvider: React.FC<Props> = ({ children, container }: Props) => (
  <AppContext.Provider value={ container }>{children}</AppContext.Provider>);
