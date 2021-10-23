import { Box, Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import { CalcStoreProvider } from "@/App/store/CalcStoreProvider";

export const Total: React.FC = () => {
  const { state } = useContext(CalcStoreProvider);

  return (<Grid xs={ 5 } item>
    <Box pt={ 2 }>
      { state.hasSalaryCard }
      <div>Total</div>
    </Box>
  </Grid>);
};
