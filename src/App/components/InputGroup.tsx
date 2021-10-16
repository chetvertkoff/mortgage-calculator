import React, { useContext } from 'react';
import { Box, Grid } from '@material-ui/core';
import { SelectItemInput } from '@/App/components/inputs/SelectItemInput';
import { ICalculatorUseCase } from "@/Domain/CalculatorUseCase";
import { Context } from "@/App/HOC/StoreProvider";

export const InputGroup: React.FC = () => {
  const calc = useContext<ICalculatorUseCase>(Context);
  return (
    <Grid xs={ 6 } item>
      <Box p={ 2 }>
        <form>
          <SelectItemInput data={ calc.loanReasonList } />
        </form>
      </Box>
    </Grid>
  );
};

