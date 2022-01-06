import { useState } from "react";
import { StoreContextProps } from "@/App/HOC/withStoreContext";

export const useFormValidate = <T extends string>(inputs: T[], dispatch: StoreContextProps["dispatch"]) => {

	const state: Record<T, boolean> = Object.assign({}, ...inputs.map((input: T) => ({ [input]: false })));

	const [err, setErr] = useState<Record<T, boolean>>(state);

	const skipDispatch = (prevState: Record<T, boolean>, nextState: Record<T, boolean>) => {
		return JSON.stringify(prevState) === JSON.stringify(nextState);
	};

	const validate = (inputName: string, isErr: boolean) => {
		const prevState = { ...err };

		err[inputName as T] = isErr;

		if (skipDispatch(prevState, err)) return;

		setErr({ ...err });

		dispatch({
			type: "IS_INVALID",
			payload: Object.values<boolean>(err).some(val => val)
		});
	};

	return {
		validate
	};

};
