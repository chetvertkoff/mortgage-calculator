import React from "react";
import { container } from "@/App/сontainer-DI";
import { CalculatorDI, CalculatorUseCase, ICalculatorUseCase } from "@/Domain/CalculatorUseCase";
import { ReactNode } from "react";
import { ApolloStore } from "@/Store/ApolloStore";
import { ApolloProvider } from "@apollo/client";
import { InjectProvider } from "@/App/HOC/InjectProvider";
import { createTheme, ThemeProvider } from "@mui/material";
import { initStore } from "@/App/HOC/CalcStoreProvider";
import { TypeText } from "@mui/material/styles/createPalette";

type Text = Partial<{
  grey: string
}> & Partial<TypeText>

const theme = createTheme({
	palette: {
		text: {
			grey: "#9e9e9e",
			darkBlue: "#1976d2",
			lightBlue: "#64b5f6"
		} as Text,
	}
});

const entity = container.get<CalculatorUseCase>(CalculatorDI);

const StoreProvider = initStore<ICalculatorUseCase>(entity);

export const Bootstrap: React.FC<{ children: ReactNode }> = ({ children }) => (
	(
		<ThemeProvider theme={ theme }>
			<ApolloProvider client={ ApolloStore.initApolloClient() }>
				<InjectProvider container={ container }>
					<StoreProvider>
						{ children }
					</StoreProvider>
				</InjectProvider>
			</ApolloProvider>
		</ThemeProvider>
	)
);
