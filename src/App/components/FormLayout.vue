<template>
  <v-container class="lighten-3" >
    <v-row no-gutters>
      <v-col :align-self="'start'">
        <v-card
          class="pa-7"
          outlined
          tile
        >
          <v-row no-gutters>
            <slot></slot>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FormLayout'
})
</script>
