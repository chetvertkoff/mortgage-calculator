import React from 'react';
import { render } from '@testing-library/react';
import { CalculatorTotal } from "@/App/components/CalculatorTotal";

test('Can render total', () => {
	render(<CalculatorTotal />);
});
