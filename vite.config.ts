import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { h } from 'preact'
import preactRenderToString from 'preact-render-to-string'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), {
    name: 'islands',
    // async transformIndexHtml(rawHtml, ctx) {
    //   const transformedHtml = rawHtml
    //   for (const ssrIsland of rawHtml.match(/\<vite-land( |( .* ))ssr.*\>/g)) {
    //     const [, src] = ssrIsland.match(/src=\"([\w-]+)\"/);
    //     const mod = await ctx.server.ssrLoadModule(`./src/islands/${src}`);
    //     console.log({mod})
    //     console.log(preactRenderToString(mod.default, {}));
    //   }
    //   return transformedHtml
    // }
  }],
})
