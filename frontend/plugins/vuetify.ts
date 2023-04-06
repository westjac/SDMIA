// plugins/vuetify.ts

import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        // your config will come here
    })

    nuxtApp.vueApp.use(vuetify)
})