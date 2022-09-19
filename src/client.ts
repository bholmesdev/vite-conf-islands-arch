import islands from './islands'
import { render, h } from 'preact'

function visible({ element }: { element: HTMLElement }) {
  return new Promise(function (resolve) {
    const observer = new IntersectionObserver(async function (entries) {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          observer.disconnect()
          resolve(true)
        }
      }
    })
    observer.observe(element)
  })
}

function media({ query }: { query: string }) {
  const mediaQuery = window.matchMedia(query)
  return new Promise(function (resolve) {
    if (mediaQuery.matches) {
      resolve(true)
    } else {
      mediaQuery.addEventListener('change', resolve, { once: true })
    }
  })
}

class Island extends HTMLElement {
  async connectedCallback() {
    const src = this.getAttribute('src') ?? '';
    const componentLoader = islands[src];
    if (!componentLoader) {
      throw new Error(`${src} is not a component! Check your islands/index.`)
    }
    if (this.hasAttribute('client:visible')) {
      await visible({ element: this });
    }
    const clientMediaQuery = this.getAttribute('client:media');
    if (clientMediaQuery) {
      await media({ query: clientMediaQuery });
    }
    const Component = (await componentLoader()).default;
    render(h(Component, {}), this);
  }
}
customElements.define('vite-land', Island);
