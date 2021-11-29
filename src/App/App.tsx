import React from 'react';
import { CalculatorLayout } from '@/App/HOC/CalculatorLayout';
import { CalculatorForm } from "@/App/components/CalculatorForm";
import { CalculatorTotal } from "@/App/components/CalculatorTotal";

const App: React.FC = () => {
	return (
		<CalculatorLayout
			form={ <CalculatorForm /> }
			total={ <CalculatorTotal /> }
		/>
	);
};

export default App;
