import React, { ComponentType, useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SelectItemInput } from "@/App/UI/inputs/SelectItemInput";
import { BaseInputProps } from "@/App/HOC/baseInput";

const items = ["test-1", "test-2", "test-3"];

const withPropsComponent = (
	Component: ComponentType<BaseInputProps>,
	items: unknown[],
	value: unknown,
	additionalProps?: Record<string, unknown>,
) => (props: BaseInputProps): JSX.Element => {
	const [val, setVal] = useState(value);

	return <Component
		items={ items }
		value={ val }
		label="test label"
		onChange={ (val: unknown) => setVal(val) }
		{ ...additionalProps }
	/>;
};

describe("Test SelectItemInput Component", () => {

	const setup = () => {
		const Component = withPropsComponent(SelectItemInput, items, items[0]);

		const utils = render(<Component value={ null } label={ "" } onChange={ () => null } />);

		return {
			utils
		};
	};

	test("Can render SelectItemInput", () => {
		const { utils } = setup();

		const input = utils.getByDisplayValue(items[0]) as HTMLInputElement;

		expect(input.value).toBe(items[0]);
	});

	test("Can select other value", () => {
		const { utils } = setup();

		const trigger = utils.getByRole("button");

		userEvent.click(trigger);

		userEvent.click(screen.getByText(items[1]));

		const input = screen.getByDisplayValue(items[1]) as HTMLInputElement;

		expect(input.value).toBe(items[1]);
	});

});
