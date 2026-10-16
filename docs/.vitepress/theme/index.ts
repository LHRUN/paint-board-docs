import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { watchLocale, type DocsRouter } from './locale'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    watchLocale(router as DocsRouter)
  }
} satisfies Theme
