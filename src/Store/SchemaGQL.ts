import { gql } from "@apollo/client/core";

export const typeDefs = gql`
  schema {
    query: Query
  }

   type Query {
    loanReasonsList: LoanReasonList!
    hasSalaryCard: HasSalaryCard!
    houseCost: HouseCost!
    initialPayment: InitialPayment!
    loanPeriod: LoanPeriod!
  }

  type LoanReasonList {
    value: LoanReason!
    list: [LoanReason!]!
  }

  type LoanReason {
    id: Int!
    name: String!
    rate: Float!
  }

  type HasSalaryCard {
    rate: Float!
  }

  type HouseCost {
    min: Int!
    max: Int!
    step: Int!
    value: Int!
  }

  type InitialPayment {
    min: Int!
    max: Int!
    step: Int!
    value: Int!
  }

  type LoanPeriod {
    min: Int!
    max: Int!
    step: Int!
    value: Int!
  }
`;
