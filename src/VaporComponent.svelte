<script lang="ts" generics="C extends Component">
  import {
    createVaporApp,
    shallowRef,
    type Component,
    type App,
  } from 'vue/vapor'
  import { onDestroy } from 'svelte'

  const {
    is,
    containerProps,
    ...props
  }: { is: C; containerProps?: Record<string, any> } & Record<
    string,
    any
  > /* TODO: fix props type */ = $props()
  let container = $state<HTMLDivElement>()
  const propsRef = shallowRef()
  let app: App | undefined

  $effect(() => {
    propsRef.value = { ...props }
  })

  $effect(() => {
    if (!container || !is) return
    app = createVaporApp(is, () => propsRef.value)
    app.mount(container)
  })

  onDestroy(() => {
    app?.unmount()
  })
</script>

<div bind:this={container} {...containerProps}></div>
