import "reflect-metadata";
import React from "react";
import {
	LoanPeriodDocument,
} from "@/App/types/graphql-types";
import { render, within } from "@testing-library/react";
import { Bootstrap } from "@/App/Bootstrap";
import { MockedProvider } from "@apollo/client/testing";
import userEvent from "@testing-library/user-event";
import { LoanPeriodInput } from "@/App/components/inputs/LoanPeriodInput";

const mock = {
	request: {
		query: LoanPeriodDocument,
	},
	result: {
		data: {
			loanPeriod: {
				min: 1,
				max: 30,
				step: 1,
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
					<LoanPeriodInput />
				</MockedProvider>
			</Bootstrap>
		);

		return { utils };
	};

	test("Can change loan period value", async () => {
		const { utils } = setup();

		const startVal = Math.round((1+30)/2);

		const newVal = startVal+1;

		const from = await utils.findByText("1 год");

		const to = await utils.findByText("30 лет");

		expect(from).toBeTruthy();

		expect(to).toBeTruthy();

		const textFieldInput = within(utils.getByTestId("slider-input__text-field")).getByDisplayValue(startVal);

		userEvent.clear(textFieldInput);

		userEvent.type(textFieldInput, newVal.toString());

		const slider = within(utils.getByTestId("slider-input__slider")).getByDisplayValue(newVal);

		expect(slider).toBeTruthy();
	});

});
