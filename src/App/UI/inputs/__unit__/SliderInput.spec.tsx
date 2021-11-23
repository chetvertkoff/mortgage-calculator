import React, { ComponentType, useState } from "react";
import { BaseInputProps } from "@/App/HOC/baseInput";
import { SelectItemInput } from "@/App/UI/inputs/SelectItemInput";

const withPropsComponent = (Component: ComponentType<BaseInputProps>) =>
	(props: BaseInputProps): JSX.Element => {
		const [val, setVal] = useState({
			min: 1,
			max: 10,
			step: 1,
			value: 1
		});

		return <Component
			value={ val }
			label="test label"
			onChange={ val => setVal(val) }
		/>;
	};

const Component = withPropsComponent(SelectItemInput);

describe('Test SliderInput component', () => {

});
