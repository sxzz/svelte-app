<script setup lang="ts">
import { useAttrs } from 'vue/vapor'

const props = defineProps<{ count: number }>()
const emit = defineEmits<{
  increment: [number]
}>()
const attrs = useAttrs()

function handleInc() {
  emit('increment', 1)
}
</script>

<template vapor>
  <h1>Hello World from Vapor!</h1>
  <div>count: {{ props.count }}</div>
  <pre>{{ attrs }}</pre>

  <button @click="handleInc">Increment</button>
</template>
