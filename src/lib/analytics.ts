export const trackEvent = (name: string, params: Record<string, any> = {}) => {
  if (typeof window === 'undefined') return
  // GA4
  // @ts-ignore
  if (window.gtag) {
    // @ts-ignore
    window.gtag('event', name, params)
  }
}
