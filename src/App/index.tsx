import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App/App';
import { ApolloProvider } from '@apollo/client';
import { container } from '@/App/сontainer-DI';
import { Store } from '@/Store/Store';
import { CalculatorDI, ICalculatorUseCase } from '@/Domain/CalculatorUseCase';
import { StoreProvider } from '@/App/HOC/StoreProvider';

const calculator = container.get<ICalculatorUseCase>(CalculatorDI);

ReactDOM.render(
  <ApolloProvider client={ Store.initApolloClient() }>
    <StoreProvider value={ calculator }>
      <App />
    </StoreProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);
