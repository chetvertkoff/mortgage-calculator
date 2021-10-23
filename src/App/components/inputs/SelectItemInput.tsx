import React, { useContext } from 'react';
import { BaseInput, BaseInputProps } from '@/App/HOC/BaseInput';
import { Select, MenuItem } from '@material-ui/core';
import { LoanReasonList } from "@/Domain/LoanReasonList";

type SelectItemInputProps = BaseInputProps & { data: LoanReasonList };

export const SelectItemInput: React.FC<SelectItemInputProps> = BaseInput( ({ data }) => {

  return (
    <div onClick={ () => dispatch({ type: "HOUSE_COST", payload: 1 }) }>
      <Select
        variant="outlined"
      >
        <MenuItem value={ 10 }>Ten</MenuItem>
      </Select>
    </div>
  );
});
