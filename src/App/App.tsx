import React, { useContext } from 'react';
import { ICalculatorUseCase } from '@/Domain/CalculatorUseCase';
import { Context } from '@/App/HOC/StoreProvider';
import { FormLayout } from '@/App/HOC/FormLayout';
import { InputGroup } from "@/App/components/InputGroup";
import { Total } from "@/App/components/Total";

const App: React.FC = () => {
  return (
    <FormLayout>
      <InputGroup  />
      <Total />
    </FormLayout>
  );
};

export default App;
