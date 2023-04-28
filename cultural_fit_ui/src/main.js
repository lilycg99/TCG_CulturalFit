import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VueApexCharts from "vue3-apexcharts";

//Main Style
//import './assets/sass/style.scss'

// const {createVuetify} = Vuetify

// const vuetify = createVuetify ({
//   theme:{
//     themes: {
//       light : {
//         dark: false,
//         colors : {
//           primary : '#3f51b5'
//         }
//       }
//     }

//   }
// })

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
.use(VueApexCharts)
  .mount('#app')


