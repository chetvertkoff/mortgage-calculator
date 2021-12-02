import React, { ComponentType, useState } from "react";
import { BaseInputProps } from "@/App/HOC/baseInput";
import { SliderInput, SliderInputProps } from "@/App/UI/inputs/SliderInput";
import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fireEvent } from "@testing-library/dom";

const value = 8;

const withPropsComponent = (Component: ComponentType<BaseInputProps & SliderInputProps>) =>
	(props: BaseInputProps): JSX.Element => {
		const [val, setVal] = useState(8);

		return <Component
			value={ val }
			min={ 1 }
			max={ 10 }
			step={ 1 }
			label="test label"
			onChange={ val => setVal(val) }
		/>;
	};

describe("Test SliderInput component", () => {
	const setup = () => {
		const Component = withPropsComponent(SliderInput);

		const utils = render(<Component value={ null } label={ "" } onChange={ () => null } />);

		return { utils };
	};

	test("Can render SliderInput component", () => {
		const { utils } = setup();

		const input = utils.getByTestId("slider-input__text-field") as HTMLElement;

		const val = within(input).getByDisplayValue(value) as HTMLInputElement;

		expect(val.value).toBe(value.toString());
	});

	test("Can change value by move slider", async () => {
		const { utils } = setup();

		const trigger = utils.getByTestId("slider-input__slider") as HTMLElement;

		fireEvent.mouseDown(trigger, { clientX: 10 });

		const input = within(utils.getByTestId("slider-input__text-field")).getByDisplayValue(10);

		expect(input).toBeTruthy();
	});

	test("Can change value by text input", () => {
		const { utils } = setup();

		const textField = utils.getByTestId("slider-input__text-field");

		const input = within(textField).getByDisplayValue(value);

		userEvent.type(input, "10");

		const slider = within(utils.getByTestId("slider-input__slider")).getByDisplayValue(10);

		expect(slider).toBeTruthy();
	});

});
