<script lang="ts">
  import { createVaporApp, shallowRef } from 'vue/vapor'

  const { is, props }: { is: any; props: Record<string, any> } = $props()
  let container = $state<HTMLDivElement>()
  const propsRef = shallowRef({})

  $effect(() => {
    if (!container || !is) return
    createVaporApp(is, () => propsRef.value).mount(container)
  })

  $effect(() => {
    propsRef.value = { ...props }
  })
</script>

<div bind:this={container}></div>
