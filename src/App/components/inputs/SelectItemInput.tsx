import React, { useContext } from 'react';
import { BaseInput, BaseInputProps } from '@/App/HOC/BaseInput';
import { Select, MenuItem } from '@material-ui/core';
import { LoanReasonList } from "@/Domain/LoanReasonList";
import { CalcStoreProvider } from "@/App/store/CalcStoreProvider";

type SelectItemInputProps = BaseInputProps & { data: LoanReasonList };

export const SelectItemInput: React.FC<SelectItemInputProps> = BaseInput( ({ data }) => {
  const { state, dispatch } = useContext(CalcStoreProvider);

  console.log(state);
  return (
    <div onClick={ () => dispatch({ type: "HOUSE_COST", payload: 1 }) }>
      { state.houseCost }
      <Select
        variant="outlined"
      >
        <MenuItem value={ 10 }>Ten</MenuItem>
      </Select>
    </div>
  );
});
