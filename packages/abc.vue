<template>
  <div>hello</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    hello (): void {
      const a = 1
      console.log(a)
    }
  }
})
</script>
