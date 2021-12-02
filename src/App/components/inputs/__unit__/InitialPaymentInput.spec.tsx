import "reflect-metadata";
import React from "react";
import { InitialPaymentDocument } from "@/App/types/graphql-types";
import { render, within } from "@testing-library/react";
import { Bootstrap } from "@/App/Bootstrap";
import { MockedProvider } from "@apollo/client/testing";
import userEvent from "@testing-library/user-event";
import { InitialPaymentInput } from "@/App/components/inputs/InitialPaymentInput";

const mock = {
	request: {
		query: InitialPaymentDocument,
	},
	result: {
		data: {
			initialPayment: {
				min: 91000,
				max: 8000000,
				step: 10000,
				value: 0,
			}
		},
	},
};

describe("Initial payment input component testing", () => {
	const setup = () => {
		const utils = render(
			<Bootstrap>
				<MockedProvider mocks={ [mock] } addTypename={ false }>
					<InitialPaymentInput />
				</MockedProvider>
			</Bootstrap>
		);

		return { utils };
	};

	test("Can change initial payment value", async () => {
		const { utils } = setup();

		const startVal = Math.round((91000+8000000)/2);

		const newVal = startVal-1;

		const from = await utils.findByText("91 тыс ₽.");

		const to = await utils.findByText("8 млн ₽.");

		expect(to).toBeTruthy();

		expect(from).toBeTruthy();

		const textFieldInput = within(utils.getByTestId("slider-input__text-field")).getByDisplayValue(startVal);

		userEvent.clear(textFieldInput);

		userEvent.type(textFieldInput, newVal.toString());

		const slider = within(utils.getByTestId("slider-input__slider")).getByDisplayValue(newVal);

		expect(slider).toBeTruthy();
	});

});
