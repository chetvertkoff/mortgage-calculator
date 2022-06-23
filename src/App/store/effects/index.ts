import { ActionReducer } from "@/App/types/types";
import { Dispatch } from "react";
import { ICalcState } from "@/App/store/reducer";

export const initEffects = <EffectsCb extends (...args: any) => any>(effectsCb: EffectsCb) =>
	(dispatch: Dispatch<ActionReducer>, state: ICalcState) => {
		const effects = effectsCb(dispatch, state);
		return (action: ActionReducer) => {
			effects[action?.type]?.(action, dispatch, state);
		};
	};
