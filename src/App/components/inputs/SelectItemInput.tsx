import React from 'react';
import { BaseInput, BaseInputProps } from '@/App/HOC/BaseInput';
import { Select, MenuItem } from '@material-ui/core';
import { LoanReasonList } from "@/Domain/LoanReasonList";

type SelectItemInputProps = BaseInputProps & { data: LoanReasonList };

export const SelectItemInput: React.FC<SelectItemInputProps> = BaseInput( ({ data }) => {
  console.log(data.list);
  return (
    <Select
      variant="outlined"
    >

      <MenuItem value={ 10 }>Ten</MenuItem>
    </Select>
  );
});
