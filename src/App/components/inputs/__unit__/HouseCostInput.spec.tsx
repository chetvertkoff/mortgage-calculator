import "reflect-metadata";
import React from "react";
import { HouseCostDocument } from "@/App/types/graphql-types";
import { render, within } from "@testing-library/react";
import { Bootstrap } from "@/App/Bootstrap";
import { MockedProvider } from "@apollo/client/testing";
import { HouseCostInput } from "@/App/components/inputs/HouseCostInput";
import userEvent from "@testing-library/user-event";
import { formatNum } from "@/App/utils/format";

const mock = {
	request: {
		query: HouseCostDocument,
	},
	result: {
		data: {
			houseCost: {
				min: 353000,
				max: 30000000,
				step: 130000,
				value: 0,
			}
		},
	},
};

describe("House cost input component testing", () => {
	const setup = () => {
		const utils = render(
			<Bootstrap>
				<MockedProvider mocks={ [mock] } addTypename={ false }>
					<HouseCostInput />
				</MockedProvider>
			</Bootstrap>
		);

		return { utils };
	};

	test("Can change value", async () => {
		const { utils } = setup();

		const startVal = (353000+30000000)/2;

		const newVal = startVal+1;

		const from = await utils.findByText("353 тыс ₽.");

		const to = await utils.findByText("30 млн ₽.");

		expect(from).toBeTruthy();

		expect(to).toBeTruthy();

		const textFieldInput = within(utils.getByTestId("slider-input__text-field"))
			.getByDisplayValue(formatNum(startVal) as string);

		userEvent.clear(textFieldInput);

		userEvent.type(textFieldInput, newVal.toString());

		const slider = within(utils.getByTestId("slider-input__slider")).getByDisplayValue(newVal);

		expect(slider).toBeTruthy();
	});

});
