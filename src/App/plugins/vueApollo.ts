import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { IStore } from '@/Store/Store'

Vue.use(VueApollo)

export default function apolloProviderInit (presenter: IStore): VueApollo {
  return new VueApollo({
    defaultClient: presenter.initApolloClient()
  })
}
