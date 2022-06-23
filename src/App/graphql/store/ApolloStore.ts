import { ApolloClient } from "@apollo/client/core";
import { InMemoryCache, NormalizedCacheObject } from "@apollo/client/cache";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { addMocksToSchema } from "@graphql-tools/mock";
import { SchemaLink } from "@apollo/client/link/schema";
import { mocks } from "@/App/graphql/store/MockGQL";
import { typeDefs } from "@/App/graphql/store/SchemaGQL";

export class ApolloStore {
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
