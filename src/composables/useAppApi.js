import { inject } from "vue"

export function useAppApi() {
  const api = inject("$api")

  if (!api) {
    throw Error("error api instance")
  }

  return { api }
}
