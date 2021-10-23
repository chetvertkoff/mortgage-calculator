import "reflect-metadata";
import React, { useContext, useEffect } from 'react';
import { Box, Grid } from '@material-ui/core';
import { SelectItemInput } from '@/App/components/inputs/SelectItemInput';
import { CalculatorDI, ICalculatorUseCase } from "@/Domain/CalculatorUseCase";
import { AppContext } from "@/App/HOC/Provider";
import { StoreDI, Store } from "@/Store/Store";
import { useQuery } from "@apollo/client";
import { GET_LOAN_REASONS } from "@/Store/QueryGQL";
import { interfaces } from "inversify";
import { Calculator } from "@/Domain/Calculator";
import { CalcStoreProvider } from "@/App/store/CalcStoreProvider";
import { SliderInput } from "@/App/components/inputs/SliderInput";

export const InputGroup: React.FC = () => {
  const container = useContext<interfaces.Container>(AppContext);
  const Store = container.get<Store>(StoreDI);
  const queries = Store.queries;
  const { loading, error, data } = useQuery(queries.GET_LOAN_REASONS);



  // setTimeout(() => {
  //   update({ houseCost: { value: 1 } });
  // }, 100);

  return (
    <Grid xs={ 6 } item>
      <Box p={ 2 }>
        <form>
          <SelectItemInput />
          <SliderInput />
        </form>
      </Box>
    </Grid>
  );
};

