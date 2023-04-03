import { createPinia } from "pinia"
import { createApp } from "vue"

import App from "./App.vue"
import router from "./router"

import vClickOutside from "click-outside-vue3"
import { Vue3Mq } from "vue3-mq"

import "normalize.css"
import "./assets/styles/main.scss"
import api from "./plugins/api"
import bem from "./plugins/bem"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3Mq)
app.use(vClickOutside)

app.use(api)
app.use(bem)

app.mount("#app")
