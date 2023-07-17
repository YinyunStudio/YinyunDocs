// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import CustomLayout from './custom.vue'

export default {
  extends: Theme,
  // Layout: () => {
  //   return h(Theme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  Layout: CustomLayout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
