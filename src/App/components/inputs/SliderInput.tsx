import React, { useContext } from 'react';
import { BaseInput, BaseInputProps } from '@/App/HOC/BaseInput';
import { Select, MenuItem } from '@material-ui/core';
import { LoanReasonList } from "@/Domain/LoanReasonList";
import { CalcStoreProvider } from "@/App/store/CalcStoreProvider";

type SelectItemInputProps = BaseInputProps & { data: LoanReasonList };

export const SliderInput: React.FC<SelectItemInputProps> = BaseInput( ({ data }) => {
  const { state } = useContext(CalcStoreProvider);
  return (
    <>
      { state.houseCost }
      <Select
        variant="outlined"
      >
        <MenuItem value={ 10 }>Ten</MenuItem>
      </Select>
    </>
  );
});
