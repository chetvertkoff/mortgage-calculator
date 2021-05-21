<template>
  <v-card elevation="0" class="selectInput">
    <v-select
        :outlined="hasBorder"
        :label="label"
        hide-details
        :menu-props="{ bottom: true, offsetY: true, closeOnClick: true,  closeOnContentClick: true}"
        v-model="data.value"
        :items="data.list"
        :item-text="'name'"
        :item-value="x => x"
    >
      <template v-slot:item="{ active, item, attrs, on }" >
        <v-list-item v-on="on">
          <v-row  class="listItem">
            <v-col class="mb-0">{{item.name}}</v-col>
            <v-col class="text-right grey--text">{{item.rateText}}</v-col>
          </v-row>
        </v-list-item>
      </template>
    </v-select>
  </v-card>
</template>

<script lang="ts">
import BaseInput from '@/App/UI/BaseInput.vue'
import Component from 'vue-class-component'

@Component
export default class SelectListUI extends BaseInput {}
</script>
