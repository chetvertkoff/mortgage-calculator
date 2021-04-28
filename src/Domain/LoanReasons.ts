import { IsNumber, IsString } from 'class-validator'

export class LoanReasons {
  @IsString()
  name: string

  @IsNumber()
  rate: number

  constructor (data?: LoanReasons) {
    this.name = data?.name ?? ''
    this.rate = data?.rate ?? 0
  }
}
