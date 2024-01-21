import DefaultTheme from 'vitepress/theme'
import './style.css'
import Custom from './custom.vue'

export default {
  extends: DefaultTheme,
  Layout: Custom
}