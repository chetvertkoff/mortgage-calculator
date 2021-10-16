import { gql } from '@apollo/client/core';

export const GET_LOAN_REASONS = gql`
  query {
    loanReasonsList {
      value
      list {
        name
        rate
      }
    }
  }
`;

export const GET_HAS_SALARY_CARD = gql`
  query {
    hasSalaryCard {
      rate
    }
  }
`;

export const GET_HOUSE_COST = gql`
  query {
    houseCost {
      min
      max
      step
      value
    }
  }
`;

export const GET_INITIAL_PAYMENT = gql`
  query {
    initialPayment {
      min
      max
      step
      value
    }
  }
`;

export const GET_LOAN_PERIOD = gql`
  query {
    loanPeriod {
      min
      max
      step
      value
    }
  }
`;
