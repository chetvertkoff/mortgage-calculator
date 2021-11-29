import React from "react";
import { render, screen, within } from "@testing-library/react";
import { LoanReasonInput } from "@/App/components/inputs/LoanReasonInput";
import { Bootstrap } from "@/App/Bootstrap";
import { MockedProvider } from "@apollo/client/testing";
import { LoanReasonsListDocument } from "@/App/types/graphql-types";
import userEvent from "@testing-library/user-event";

const mock = {
	request: {
		query: LoanReasonsListDocument,
	},
	result: {
		data: {
			loanReasonsList: {
				list: [
					{ id: 0, name: 'Готовое жилье', rate: 7.3, },
					{ id: 1, name: 'Новостройка', rate: 0.9 },
				]
			}
		},
	},
};

describe('Loan reason input component testing', () => {
	const setup = () => {
		const utils = render(
			<Bootstrap>
				<MockedProvider mocks={ [mock] } addTypename={ false }>
					<LoanReasonInput />
				</MockedProvider>
			</Bootstrap>
		);

		return { utils };
	};

	test('Can change value', async () => {
		const { utils } = setup();

		const trigger = await utils.findByText('Готовое жилье');

		userEvent.click(trigger);

		userEvent.click(screen.getByText('Новостройка'));

		const input = within(utils.getByTestId('select-item-input')).getByText('Новостройка') as HTMLInputElement;

		expect(input).toBeTruthy();
	});
});
