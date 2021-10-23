import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App/App';
import { ApolloProvider } from '@apollo/client';
import { container } from '@/App/сontainer-DI';
import { Store } from '@/Store/Store';
import { DiProvider } from '@/App/HOC/Provider';
import { initStore } from "@/App/store/CalcStoreProvider";
import { CalculatorDI, CalculatorUseCase, ICalculatorUseCase } from "@/Domain/CalculatorUseCase";

const entity = container.get<CalculatorUseCase>(CalculatorDI);

const StoreProvider = initStore<ICalculatorUseCase>(entity);

ReactDOM.render(
  <ApolloProvider client={ Store.initApolloClient() }>
    <DiProvider container={ container }>
      <StoreProvider>
        <App />
      </StoreProvider>
    </DiProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);
