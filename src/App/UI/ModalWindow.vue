<template>
  <v-dialog
      v-model="dialog"
      max-width="80%"
      scrollable
      persistent
  >
    <v-card  class="hidden">
      <v-card-title class="headline lighten-2 d-flex">
        <v-row>
          <slot name="modal-header"/>
          <v-col class="col-1 justify-end text-right">
            <v-icon
                color="grey darken-2 ml-auto"
                medium
                @click="$emit('on-modal-change', false)"
            >
              mdi-close
            </v-icon>
          </v-col>
        </v-row>
      </v-card-title>
      <slot name="modal-body"/>

      <v-divider></v-divider>

    </v-card>
    <template v-slot:activator="{ on, attrs }">
      <slot name="modal-button"/>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class ModalWindow extends Vue {
  @Prop({ type: Boolean, default: false })
  private dialog!: boolean
}
</script>

<style >
  .v-card__text, .v-dialog {
    overflow: inherit !important;
  }

</style>
