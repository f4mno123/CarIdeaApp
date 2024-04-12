import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import App from './App.vue'
import router from './router'
import { FcSearch, PiPikachu, PxMenu, HiSolidHome, BiBalloonHeartFill, CoCart} from "oh-vue-icons/icons";

addIcons(PxMenu, FcSearch, PiPikachu, HiSolidHome, BiBalloonHeartFill, CoCart);

const app = createApp(App)  


app.use(createPinia())
app.use(router)
app.component('v-icon', OhVueIcon)
app.mount('#app')
