<script lang="ts">
  import VaporComponent from '$lib/components/VaporComponent.svelte'
  import HelloWorld from '$lib/components/HelloWorld.vue'

  let count = $state(1)
</script>

<VaporComponent is={HelloWorld} props={{ count, name: 'test component' }} />

<button onclick={() => count++}>Increment</button>
<button onclick={() => count--}>Decrement</button>
