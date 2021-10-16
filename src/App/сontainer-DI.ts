import 'reflect-metadata';
import { Container } from 'inversify';
// store
import { CalculatorDI, CalculatorUseCase } from '@/Domain/CalculatorUseCase';
import { StoreDI, Store } from '../Store/Store';
// entity

const container = new Container();

container.bind(StoreDI).to(Store);
container.bind(CalculatorDI).to(CalculatorUseCase);

export { container };
