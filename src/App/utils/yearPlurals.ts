const pr = new Intl.PluralRules('ru-RU');

const suffixes = new Map([
	['one', 'год'],
	['few', 'года'],
	['many', 'лет'],
	['other', 'лет'],
]);

export const yearPlural = (n: number): string => {
	const rule = pr.select(n);
	const suffix = suffixes.get(rule);
	return `${n} ${suffix}`;
};
