import { bem as bemUtils } from "../utils/bem"

export default {
  install(app) {
    const bem = bemUtils

    app.config.globalProperties.$bem = bem
    app.provide("$bem", bem)
  },
}
