import 'reflect-metadata';
import { Container } from 'inversify';
// store
import { CalculatorDI, CalculatorUseCase } from '@/Domain/CalculatorUseCase';
import { StoreDI, ApolloStore } from '../Store/ApolloStore';
// entity

const container = new Container();

container.bind(StoreDI).to(ApolloStore);
container.bind(CalculatorDI).to(CalculatorUseCase);

export { container };
