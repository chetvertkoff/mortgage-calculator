import React from "react";
import { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import { createTheme, ThemeProvider } from "@mui/material";
import { initStore } from "@/App/HOC/CalcStoreProvider";
import { TypeText } from "@mui/material/styles/createPalette";
import { ApolloStore } from "@/App/graphql/store/ApolloStore";
import { effects } from "@/App/store/effects/calc-effects";

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

const StoreProvider = initStore([effects]);

export const Bootstrap: React.FC<{ children: ReactNode }> = ({ children }) => (
	(
		<ThemeProvider theme={ theme }>
			<ApolloProvider client={ ApolloStore.initApolloClient() }>
				<StoreProvider>
					{ children }
				</StoreProvider>
			</ApolloProvider>
		</ThemeProvider>
	)
);
