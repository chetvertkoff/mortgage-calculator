<template>
  <tr>
    <td class="text-h6 font-weight-regular">{{ item.month }}</td>
    <td class="text-h6 font-weight-regular text-right">{{ item.annuitet|roundFormat }} ₽</td>
    <td class="text-h6 font-weight-regular grey--text text-right">{{ item.rateSum|formatNum }} ₽</td>
    <td class="text-h6 font-weight-regular grey--text text-right">{{ item.loanSum|formatNum }} ₽</td>
    <td class="text-h6 font-weight-regular text-right">{{ item.leftToPay|formatNum }} ₽</td>
  </tr>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ChartTableRow',
  props: ['item']
})
</script>
