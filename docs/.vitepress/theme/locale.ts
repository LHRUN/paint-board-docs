type DocsLocale = 'en' | 'zh'

export interface DocsRouter {
  route: { path: string }
  go: (to?: string) => Promise<void>
  onAfterRouteChanged?: (to: string) => void
}

const STORAGE_KEY = 'paint-board-docs-locale'

const localeOf = (path: string): DocsLocale =>
  path === '/zh' || path.startsWith('/zh/') ? 'zh' : 'en'

const pathFor = (path: string, locale: DocsLocale) => {
  const stripped = path.replace(/^\/zh(?=\/|$)/, '') || '/'
  if (locale === 'en') {
    return stripped
  }
  return stripped === '/' ? '/zh/' : `/zh${stripped}`
}

const browserLocale = (): DocsLocale =>
  typeof navigator !== 'undefined' &&
  navigator.language.toLowerCase().startsWith('zh')
    ? 'zh'
    : 'en'

export const watchLocale = (router: DocsRouter) => {
  if (typeof window === 'undefined') {
    return
  }

  router.onAfterRouteChanged = (path) => {
    const current = localeOf(path)
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved !== 'en' && saved !== 'zh') {
      const preferred = browserLocale()
      window.localStorage.setItem(STORAGE_KEY, preferred)
      if (preferred !== current) {
        void router.go(pathFor(path, preferred))
      }
      return
    }
    if (saved !== current) {
      window.localStorage.setItem(STORAGE_KEY, current)
    }
  }
}
