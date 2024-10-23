<script setup lang="ts">
import { useAttrs } from 'vue/vapor'

const props = defineProps<{ count: number }>()
const attrs = useAttrs()
</script>

<template vapor>
  <h1>Hello World from Vapor!</h1>
  <div>count: {{ props.count }}</div>

  <pre>{{ attrs }}</pre>
</template>
