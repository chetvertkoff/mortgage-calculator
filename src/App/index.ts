import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import apolloProviderInit from '@/App/plugins/vueApollo'

import '@/App/utils/vueFilters'

import { container } from '@/App/ContainerDI'
import { IStore, StoreDI } from '@/Store/Store'

const store = container.get<IStore>(StoreDI)
const apolloProvider = apolloProviderInit(store)

Vue.config.productionTip = false

new Vue({
  vuetify,
  apolloProvider,
  render: h => h(App, { props: { container } })
}).$mount('#app')
