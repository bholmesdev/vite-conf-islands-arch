const manifest: Record<string, () => any> = {
  App: () => import('./App'),
  MobileNav: () => import('./MobileNav'),
  ImageCarousel: () => import('./ImageCarousel'),
}

export default manifest