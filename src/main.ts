import './assets/css/satoshi.css'
import './assets/css/style.css'
import 'jsvectormap/dist/css/jsvectormap.min.css'
import 'flatpickr/dist/flatpickr.min.css'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import EN from './locale/en.json';
import FR from './locale/fr.json';

import { createPinia } from 'pinia'
import VueApexCharts from 'vue3-apexcharts'

import App from './App.vue'
import router from './router'

const i18n = createI18n({
    locale: 'FR',
    messages: {
        EN:EN,
        FR:FR,
    }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueApexCharts)
app.use(i18n)

app.mount('#app')
