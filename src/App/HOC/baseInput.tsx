import React from 'react';
import { isNotEmpty } from "@/App/utils/utils";
import { ChangeInputEvent } from "@/App/types/types";

export type RequiredProps = {
  value: any | null
  label: string
  onChange: (val: any) => any
};

type AdditionalProps = {
  items?: ReadonlyArray<any> | undefined
  itemValue?: string
  itemText?: string
  returnObject?: boolean
  hasBorder?: boolean
}

export type BaseProps = {
  getItemText?: (item: any) => any
  getItemValue?: (item: any) => any
  getValue?: <T>(e: ChangeInputEvent<T>) => Record<string, any> | any | string
}

export type BaseInputProps = RequiredProps & AdditionalProps & BaseProps;

export const baseInput = <ChildProps extends BaseInputProps> (InputComponent: React.ComponentType<ChildProps>) => (
	(props: Omit<ChildProps, keyof BaseInputProps> & BaseInputProps): JSX.Element => {
		const defaultInputProps: RequiredProps = {
			label: '',
			value: '',
			onChange: (e) => e
		};

		const getItemText = (item: any): any => (
			(item && props.itemText ? (item as Record<string, any>)[props.itemText as string] : item)
		);

		const getItemValue = (item: any): any => (
			(item && props.itemValue ? (item as Record<string, any>)[props.itemValue as string] : item)
		);

		const getItemObject = (itemVal: any): Record<string, any> | any => (
			(props.items?.find(val => props.itemValue && val[props.itemValue as string] === itemVal) ?? itemVal)
		);

		const getValue = (e: any): Record<string, any> | any | string => {
			return (isNotEmpty(props.returnObject) && isNotEmpty(e?.target.value)
				? getItemObject(e.target.value)
				: e.target.value);
		};

		return (
			<>
				<InputComponent
					{ ...defaultInputProps }
					{ ...(props as ChildProps) }
					getItemText={ getItemText }
					getItemValue={ getItemValue }
					getValue={ getValue }
				/>
			</>
		);
	});
