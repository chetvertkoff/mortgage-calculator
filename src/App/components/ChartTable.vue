<template>
  <v-card-text>
    <v-simple-table fixed-header height="80vh">
      <template v-slot:default>
        <thead>
        <tr>
          <th v-for="header in tableHeader" class="text-left">{{ header }}</th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="item in chart.list"
            :key="item.name"
        >
          <td v-if="item.year" colspan="2">{{ item.year }}</td>
          <template v-else>
            <td>{{ item.month }}</td>
            <td>{{ item.annuitet }}</td>
          </template>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card-text>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop } from 'vue-property-decorator'
import { ChartUseCase } from '@/Domain/ChartUseСase'
import Component from 'vue-class-component'

@Component
export default class ChartTable extends Vue {
  @Prop({ type: Object }) private readonly chart!: ChartUseCase
  private readonly tableHeader: string[] = [
    'Месяц', 'Платеж'
  ]
}

</script>
