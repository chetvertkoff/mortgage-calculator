import { injectable } from 'inversify';
import { ApolloClient } from '@apollo/client/core';
import { InMemoryCache, NormalizedCacheObject } from '@apollo/client/cache';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { addMocksToSchema } from '@graphql-tools/mock';
import { SchemaLink } from '@apollo/client/link/schema';

import { typeDefs } from '@/Store/SchemaGQL';
import { mocks } from '@/Store/MockGQL';
import {
  GET_LOAN_REASONS, GET_HAS_SALARY_CARD, GET_HOUSE_COST, GET_INITIAL_PAYMENT, GET_LOAN_PERIOD,
} from '@/Store/QueryGQL';

export const StoreDI = Symbol.for('StoreDI');

@injectable()
export class Store {
  static get queries(): { [key: string]: unknown } {
    return {
      GET_LOAN_REASONS, GET_HAS_SALARY_CARD, GET_HOUSE_COST, GET_INITIAL_PAYMENT, GET_LOAN_PERIOD,
    };
  }

  public static initApolloClient(): ApolloClient<NormalizedCacheObject> {
    const schema = addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs }),
      mocks,
    });
    const cache = new InMemoryCache();

    return new ApolloClient({
      cache,
      link: new SchemaLink({ schema }),
    });
  }
}
