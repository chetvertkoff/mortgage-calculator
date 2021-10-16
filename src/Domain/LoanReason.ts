import { IsNumber, IsString } from 'class-validator';
import { Entity } from '@/Domain/Entity';

export class LoanReason extends Entity {
  @IsString()
  name: string;

  @IsNumber()
  rate: number;

  rateText: string;

  constructor(props?: LoanReason) {
    super();
    this.name = props?.name ?? '';
    this.rate = props?.rate ?? 0;
    this.rateText = `от ${this.rate}%`;
  }
}
