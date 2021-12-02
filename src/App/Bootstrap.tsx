import React from "react";
import { container } from "@/App/сontainer-DI";
import { CalculatorDI, CalculatorUseCase, ICalculatorUseCase } from "@/Domain/CalculatorUseCase";
import { initStore } from "@/App/store/CalcStoreProvider";
import { ReactNode } from "react";
import { ApolloStore } from "@/Store/ApolloStore";
import { ApolloProvider } from "@apollo/client";
import { DiProvider } from "@/App/HOC/Provider";

const entity = container.get<CalculatorUseCase>(CalculatorDI);

const StoreProvider = initStore<ICalculatorUseCase>(entity);

export const Bootstrap: React.FC<{ children: ReactNode }> = ({ children }) => (
	(
		<ApolloProvider client={ ApolloStore.initApolloClient() }>
			<DiProvider container={ container }>
				<StoreProvider>
					{ children }
				</StoreProvider>
			</DiProvider>
		</ApolloProvider>
	)
);
