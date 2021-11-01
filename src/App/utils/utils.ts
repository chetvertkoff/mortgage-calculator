import { Nullable } from "@/App/types/types";

export const isNullish = <T extends unknown>(
	value: T | Nullable): value is Nullable => (value === null || value === undefined);

export const isNotEmpty = <T extends unknown>(
	value: T | Nullable): value is Exclude<T, null | undefined> => (value !== null && value !== undefined);
