import React, { useContext } from 'react';
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
