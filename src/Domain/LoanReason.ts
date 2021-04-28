import { IsNumber, IsString } from 'class-validator'

export class LoanReason {
  @IsString()
  name: string

  @IsNumber()
  rate: number

  constructor (props?: LoanReason) {
    this.name = props?.name ?? ''
    this.rate = props?.rate ?? 0
  }
}
