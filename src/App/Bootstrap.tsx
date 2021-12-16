import React from "react";
import { container } from "@/App/сontainer-DI";
import { CalculatorDI, CalculatorUseCase, ICalculatorUseCase } from "@/Domain/CalculatorUseCase";
import { initStore } from "@/App/store/CalcStoreProvider";
import { ReactNode } from "react";
import { ApolloStore } from "@/Store/ApolloStore";
import { ApolloProvider } from "@apollo/client";
import { DiProvider } from "@/App/HOC/Provider";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
	palette: {
		text: {
			grey: "#9e9e9e",
			darkBlue: "#1976d2",
			lightBlue: "#64b5f6"
		},
	}
});

const entity = container.get<CalculatorUseCase>(CalculatorDI);

const StoreProvider = initStore<ICalculatorUseCase>(entity);

export const Bootstrap: React.FC<{ children: ReactNode }> = ({ children }) => (
	(
		<ThemeProvider theme={ theme }>
			<ApolloProvider client={ ApolloStore.initApolloClient() }>
				<DiProvider container={ container }>
					<StoreProvider>
						{ children }
					</StoreProvider>
				</DiProvider>
			</ApolloProvider>
		</ThemeProvider>
	)
);
