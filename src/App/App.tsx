import React from "react";
import { CalculatorLayout } from "@/App/HOC/CalculatorLayout";
import { CalculatorTotal } from "@/App/components/CalculatorTotal";
import { CalculatorForm } from "@/App/components/forms/CalculatorForm";

const App: React.FC = () => (
	<CalculatorLayout
		form={ <CalculatorForm /> }
		total={ <CalculatorTotal /> }
	/>
);

export default App;
