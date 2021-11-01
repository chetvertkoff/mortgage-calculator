import {
	hasSalaryCard, houseCost, initialPayment, loanPeriod, loanReasons,
} from './fakeData';

export const mocks = {
	Query: () => ({
		loanReasonsList: () => loanReasons,
		hasSalaryCard: () => hasSalaryCard,
		houseCost: () => houseCost,
		initialPayment: () => initialPayment,
		loanPeriod: () => loanPeriod,
	}),

};
