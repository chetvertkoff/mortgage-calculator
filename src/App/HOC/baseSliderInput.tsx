import React, { useMemo } from "react";
import { StoreContextProps } from "@/App/HOC/withStoreContext";
import { isNotEmpty } from "@/App/utils/utils";

type SliderProps = {
  min?: number,
  max?: number,
  step?: number,
  value?: number,
  validate?: (inputName: string, isErr: boolean) => void,
}

export type BaseSliderInputProps = SliderProps & StoreContextProps;

export const baseSliderInput = <ChildProps extends BaseSliderInputProps>(
	AbstractSliderComponent: React.ComponentType<ChildProps>,
	entityName: "houseCost" | "initialPayment" | "loanPeriod" ) => (
		(props: Omit<ChildProps, keyof BaseSliderInputProps> & BaseSliderInputProps): JSX.Element => {

			const entity: SliderProps = props.state[entityName];

			const value = useMemo<number>(() => ((
				isNotEmpty(entity.value) ? entity.value : 0
			)), [entity.value]);

			const max = useMemo<number>(() => ((
				isNotEmpty(entity.max) ? entity.max : 0
			)), [entity.max]);

			const min = useMemo<number>(() => ((
				isNotEmpty(entity.min) ? entity.min : 0
			)), [entity.min]);

			const step = useMemo<number>(() => ((
				isNotEmpty(entity.step) ? entity.step : 0
			)), [entity.step]);

			return (
				<AbstractSliderComponent
					{ ...(props as ChildProps) }
					value={ value }
					max={ max }
					min={ min }
					step={ step }
				/>
			);
		});
