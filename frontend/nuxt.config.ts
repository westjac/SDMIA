// nuxt.config.ts
// https://www.the-koi.com/projects/how-to-set-up-a-project-with-nuxt3-and-vuetify3-with-a-quick-overview/

import vuetify from 'vite-plugin-vuetify'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
// @ts-ignore
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            apiBase: process.env.API_BASE,
        }
    },
    css: ['vuetify/styles'], // vuetify ships precompiled css, no need to import sass
    vite: {
        // @ts-ignore
        // curently this will lead to a type error, but hopefully will be fixed soon #justBetaThings
        ssr: {
            noExternal: ['vuetify'], // add the vuetify vite plugin
        },
    },
    modules: [
        // @ts-ignore
        // this adds the vuetify vite plugin
        // also produces type errors in the current beta release
        async (options, nuxt) => {
        // @ts-ignore
            nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
                vuetify()
            ))
        }
    ],

})
