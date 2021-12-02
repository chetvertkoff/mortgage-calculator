import { LoanReason } from "@/Domain/LoanReason";
import { Entity } from "@/Domain/Entity";

export class LoanReasonList extends Entity {
  value: LoanReason;

  list: LoanReason[];

  constructor(props?: LoanReasonList) {
  	super();
  	this.value = new LoanReason(props?.list?.slice(0, 1)[0]);
  	this.list = props?.list?.map((el) => new LoanReason(el)) ?? [];
  }
}
