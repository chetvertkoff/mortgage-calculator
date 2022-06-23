import React from "react";
import { CalculatorLayout } from "@/App/HOC/CalculatorLayout";
import { CalculatorForm } from "@/App/components/forms/CalculatorForm";
import { TotalDialog } from "@/App/components/dialog/TotalDialog";
import { TotalStatisticCard } from "@/App/components/card/TotalStatisticCard";

const App: React.FC = () => (
	<CalculatorLayout
		form={ <CalculatorForm /> }
		total={ <>
			<TotalStatisticCard />
			<TotalDialog />
		</> }
	/>
);

export default App;
