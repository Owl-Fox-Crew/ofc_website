export const trackEvent = (name: string, params: Record<string, any> = {}) => {
  if (typeof window === 'undefined') return

  // Google Analytics 4
  if ((window as any).gtag) {
    (window as any).gtag('event', name, params)
  }
}
