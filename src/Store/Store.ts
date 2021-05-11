import { injectable } from 'inversify'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { addMocksToSchema } from '@graphql-tools/mock'
import { SchemaLink } from 'apollo-link-schema'

import { typeDefs } from '@/Store/SchemaGQL'
import { mocks } from '@/Store/MockGQL'
import { GET_LOAN_REASONS, GET_HAS_SALARY_CARD, GET_HOUSE_COST, GET_INITIAL_PAYMENT, GET_LOAN_PERIOD } from '@/Store/QueryGQL'


export const StoreDI = Symbol.for('StoreDI')

export interface IStore {
  initApolloClient(): ApolloClient<NormalizedCacheObject>
  queries: { [key: string]: any }
}

@injectable()
export class Store implements IStore {
  get queries (): { [key: string]: any } {
    return { GET_LOAN_REASONS, GET_HAS_SALARY_CARD, GET_HOUSE_COST, GET_INITIAL_PAYMENT, GET_LOAN_PERIOD }
  }

  public initApolloClient (): ApolloClient<NormalizedCacheObject> {
    const schema = addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs }),
      mocks
    })
    const cache = new InMemoryCache()

    return new ApolloClient({
      cache,
      link: new SchemaLink({ schema })
    })
  }
}
