import Vue from 'vue'
import { formatNum, roundFormat, shortNumCurrency, toNum } from '@/App/utils/numeric'

Vue.filter('shortNumCurrency', shortNumCurrency)
Vue.filter('formatNum', formatNum)
Vue.filter('toNum', toNum)
Vue.filter('roundFormat', roundFormat)
