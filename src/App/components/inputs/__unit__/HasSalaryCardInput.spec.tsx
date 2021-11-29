import 'reflect-metadata';
import React from "react";
import { render, screen } from "@testing-library/react";
import { HasSalaryCardInput } from "@/App/components/inputs/HasSalaryCardInput";
import { Bootstrap } from "@/App/Bootstrap";
import userEvent from "@testing-library/user-event";
import { MockedProvider } from "@apollo/client/testing";
import { HasSalaryCardDocument } from "@/App/types/graphql-types";

const mock = {
	request: {
		query: HasSalaryCardDocument,
	},
	result: {
		data: {
			hasSalaryCard: {
				rate: 0.5,
			},
		},
	},
};

describe('Has salary card component testing', () => {
	const setup = () => {
		const utils = render(
			<Bootstrap>
				<MockedProvider mocks={ [mock] } addTypename={ false }>
					<HasSalaryCardInput />
				</MockedProvider>
			</Bootstrap>
		);

		return { utils };
	};

	test('Can render has salary card input component', async () => {
		const { utils } = setup();

		const label = await screen.findByText('- 0.5%');

		expect(label).toBeTruthy();

		const checkbox = utils.getByTestId('switch-input') as HTMLElement;

		const input = checkbox.querySelector('input') as HTMLInputElement;

		userEvent.click(input);

		expect(input.checked).toEqual(true);
	});
});
