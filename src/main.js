import { createPinia } from "pinia"
import { createApp } from "vue"

import App from "./App.vue"
import router from "./router"

import "normalize.css"
import "./assets/styles/main.scss"
import api from "./plugins/api"

const app = createApp(App)

app.use(api)
app.use(createPinia())
app.use(router)

app.mount("#app")
