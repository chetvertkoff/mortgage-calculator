<template>
  <v-card-text class="hidden">
    <div v-if="loading" style="height:80vh">
      <v-skeleton-loader
          :boilerplate="true"
          elevation="2"
          type="table-thead, table-tbody, table-tbody"
          max-height="80vh"
      ></v-skeleton-loader>
    </div>
    <v-simple-table v-else fixed-header height="80vh" >
      <template v-slot:default>
        <thead>
        <tr>
          <th
              v-for="(header, i) in tableHeader"
              :key="i"
              class="text-left subtitle-2 font-weight-medium"
              :class="{'text-right': i !== 0}"
          >
            {{ header }}
          </th>
        </tr>
        </thead>
        <tbody>
        <template
            v-for="(item, i) in list"
        >
          <template v-if="item.year">
            <tr :key="i">
              <td class="grey--text subtitle-2" colspan="5">{{ item.year }}</td>
            </tr>
            <ChartTableRow :item="item" />
          </template>
          <ChartTableRow v-else :key="i" :item="item" />
        </template>
        </tbody>
      </template>
    </v-simple-table>
  </v-card-text>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop, Watch } from 'vue-property-decorator'
import { ChartUseCase } from '@/Domain/ChartUseСase'
import Component from 'vue-class-component'
import { Chart } from '@/Domain/Chart'
import ChartTableRow from '@/App/components/ChartTableRow.vue'

@Component({ components: { ChartTableRow } })
export default class ChartTable extends Vue {
  @Prop({ type: Object })
  private readonly chart!: ChartUseCase

  private list: Chart[]|undefined|[] = []
  private loading = false
  private readonly tableHeader: string[] = [
    'Месяц', 'Платеж', 'Проценты', 'Основной долг', 'Остаток долга'
  ]

  @Watch('chart')
  reqChart (): void {
    this.loading = true
    this.getChartList()
  }

  mounted (): void {
    this.reqChart()
  }

  private async getChartList (): Promise<void> {
    setTimeout(async () => {
      this.list = await this.chart.getChartlist()
      this.loading = false
    }, 1000)
  }
}

</script>
