<template>
  <aside class="el-aside" :style="{ width: width }">
    <slot />
  </aside>
</template>

<script lang="ts">
import { App, defineComponent, inject } from 'vue'
import vptypes from 'vptypes'
import { layoutInjectKey } from './core'

const EAside = defineComponent({
  name: 'EAside',
  props: {
    width: vptypes.string().def('250px'),
  },
  setup(props, { slots }) {
    const layout = inject(layoutInjectKey)
    layout?.setAside()
    return {}
  },
})

EAside.install = (app: App): void => {
  app.component(EAside.name, EAside)
}

export default EAside
</script>
