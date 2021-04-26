import Vue from 'vue'
import App from './App/App.vue'
import vuetify from './App/plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
