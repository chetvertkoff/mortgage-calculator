import 'reflect-metadata'
import { Container } from 'inversify'
// store
import { StoreDI, Store } from './Store/Store'
// entity
import { CalculatorDI, CalculatorUseCase } from '@/Domain/CalculatorUseCase'

const container = new Container()

container.bind(StoreDI).to(Store)
container.bind(CalculatorDI).to(CalculatorUseCase)

export { container }
