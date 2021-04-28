import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { IStore, StoreDI } from '@/Store/Store'

Vue.use(VueApollo)

export default function apolloProviderInit (presenter: IStore) {
  return new VueApollo({
    defaultClient: presenter.initApolloClient()
  })
}
