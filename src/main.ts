import './assets/css/satoshi.css'
import './assets/css/style.css'
import 'jsvectormap/dist/css/jsvectormap.min.css'
import 'flatpickr/dist/flatpickr.min.css'
import { createApp, watch } from 'vue'
import { createI18n } from 'vue-i18n'
import en from './locale/en.json';
import fa from './locale/fa.json';

import { createPinia } from 'pinia'
import VueApexCharts from 'vue3-apexcharts'

import Dashboard from './Dashboard.vue'
import router from './router'

// Set up i18n with FR as the default locale
const i18n = createI18n({
    locale: 'EN',
    messages: {
        EN: en,
        FA: fa,
    },
})

const app = createApp(Dashboard)

// Watch for changes in the locale and update the document direction dynamically
watch(
    () => i18n.global.locale,
    (newLocale: string) => {
        const direction = newLocale === 'FA' ? 'rtl' : null; // Set to 'rtl' only for 'FA'
        const newDirection = newLocale !== 'FA' ? 'ltr' : null; // Set to 'ltr' for others

        // Use a fallback value to avoid passing null
        document.documentElement.setAttribute('dir', direction || newDirection || 'ltr');
    }
);



// Set the initial document direction
document.documentElement.setAttribute('dir', i18n.global.locale === 'FA' ? 'rtl' : 'ltr');

app.use(createPinia())
app.use(router)
app.use(VueApexCharts)
app.use(i18n)

app.mount('#app')
