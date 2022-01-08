import React from "react";
import { CalculatorLayout } from "@/App/HOC/CalculatorLayout";
import { CalculatorTotal } from "@/App/components/CalculatorTotal";
import { CalculatorForm } from "@/App/components/forms/CalculatorForm";

console.log('Hello world');

const App:                                                                                                        React.FC = () => {

	return (
		<CalculatorLayout
			form={ <CalculatorForm /> }
			total={ <CalculatorTotal /> }
		/>
	);
};

export default App;
