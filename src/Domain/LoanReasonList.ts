import { LoanReason } from '@/Domain/LoanReason'

export class LoanReasonList {
  value: LoanReason

  list: LoanReason[]

  constructor (props?: LoanReasonList) {
    this.value = new LoanReason(props?.list?.slice(0, 1)[0])
    this.list = props?.list?.map(el => new LoanReason(el)) ?? []
  }
}
