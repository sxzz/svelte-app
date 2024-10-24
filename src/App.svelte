<script lang="ts">
  import VaporComponent from './components/VaporComponent.svelte'
  import HelloWorld from './components/HelloWorld.vue'

  let count = $state(1)
</script>

<VaporComponent
  containerProps={{ id: 'vue-component' }}
  is={HelloWorld}
  {count}
  name="Vapor Component"
  onIncrement={() => count++}
  nestedProp={{ count }}
/>

<button onclick={() => count--}>Decrement</button>
