import { Calculator } from '@/Domain/Calculator'
import { injectable } from 'inversify'

export const CalculatorDI = Symbol.for('CalculatorDI')

export interface ICalculatorUseCase {

}

@injectable()
export class CalculatorUseCase extends Calculator implements ICalculatorUseCase {
  constructor () {
    super()
  }
}
