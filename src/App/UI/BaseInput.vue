<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseInput',
  props: {
    label: String,
    hasBorder: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object
    }
  }
})

</script>
