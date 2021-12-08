export class LoanReasonVM {
  public value = {
  	name: "",
  	rate: 0,
  }

  public list: LoanReasonVM["value"][] = []

  public static fromModel(loanReason: LoanReasonVM): LoanReasonVM {
  	const model = new this();

  	Object.assign(model, {
  		value: loanReason.value.rate ? loanReason.value : loanReason.list[0],
  		list: loanReason.list
  	});

  	return model;
  }
}
