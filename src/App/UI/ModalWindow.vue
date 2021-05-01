<template>
  <v-dialog
      v-model="dialog"
      max-width="80%"
  >
    <v-card>
      <v-card-title class="headline lighten-2 d-flex">
          <v-row>
            <v-col class="col-11">

            </v-col>
            <v-col class="col-1 justify-end">
              <v-icon
                  medium
                  color="grey darken-2 ml-auto"
                  @click="dialog = false"
              >
                mdi-close
              </v-icon>
          </v-col>
        </v-row>
      </v-card-title>

      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </v-card-text>

      <v-divider></v-divider>

    </v-card>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          class="col-12 pa-6"
          depressed
          color="primary"
          v-on="on"
      >
        График платежей
      </v-btn>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
  export default class ModalWindow extends Vue {
    private dialog: boolean = false
  }
</script>
