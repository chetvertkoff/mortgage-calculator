import React from 'react';

export type BaseInputProps = {
  label: string,
  hasBorder: boolean,
  data: Record<string, any>
};

export const BaseInput = <ChildProps extends BaseInputProps> (InputComponent: React.ComponentType<ChildProps>) => {
  const WrappedInputComponent = (props: Omit<ChildProps, keyof BaseInputProps>) => {
    const defaultInputProps: BaseInputProps = {
      label: '',
      hasBorder: false,
      data: {},
    };

    return (
      <>
        <InputComponent { ...defaultInputProps } { ...(props as ChildProps) } />
      </>
    );
  };

  return WrappedInputComponent;
};
