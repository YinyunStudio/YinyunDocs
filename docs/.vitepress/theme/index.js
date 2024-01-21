import DefaultTheme from 'vitepress/theme'
import './style.css'
import Custom from './Custom.vue'

export default {
  extends: DefaultTheme,
  Layout: Custom
}