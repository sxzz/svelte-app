# svelte-vapor

A bridge between Svelte and Vapor.

## Installation

```bash
npm install svelte-vapor
```

## Usage

```html
<script>
  import SvelteVapor from 'svelte-vapor'
  import HelloWorld from './HelloWorld.vue'
</script>

<SvelteVapor
  containerProps={{ id: 'vue-component' }}
  is={HelloWorld}

  count={1}
/>
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2024 [三咲智子 Kevin Deng](https://github.com/sxzz)
