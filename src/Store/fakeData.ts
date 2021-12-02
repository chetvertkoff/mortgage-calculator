export const loanReasons = {
	list: [
		{ id: 0,name: "Готовое жилье", rate: 7.3, },
		{ id: 1,name: "Новостройка", rate: 0.9 },
		{ id: 2,name: "Господдержка 2020", rate: 0.1 },
		{ id: 3,name: "Для семей с детьми", rate: 0.1 },
		{ id: 4,name: "Дальневосточная ипотека", rate: 1 },
		{ id: 5,name: "Строительство дома", rate: 0.9 },
		{ id: 6,name: "Загородный дом, земля", rate: 8.8 },
		{ id: 7,name: "Строительство дома", rate: 8 },
	],
};

export const hasSalaryCard = {
	rate: 0.5,
};

export const houseCost = {
	min: 353000,
	max: 30000000,
	step: 130000,
	value: 0,
};

export const initialPayment = {
	min: 91000,
	max: 8000000,
	step: 10000,
	value: 0,
};

export const loanPeriod = {
	min: 1,
	max: 30,
	step: 1,
	value: 0,
};
