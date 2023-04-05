import { defineStore } from "pinia"
import { ref } from "vue"
import { useAppApi } from "../composables/useAppApi"
import { removeTokenCO, setTokenCO } from "../tools/cookiesPersist"
import { removeTokenLS, setTokenLS } from "../tools/storagePersist"

export const useStoreAuth = defineStore("auth", () => {
  const { $api } = useAppApi()

  // state
  const entities = ref({
    isAuth: false,
  })
  const pending = ref(false)
  const error = ref(null)

  // actions
  async function signUp(payload) {
    try {
      setAuthStart()

      const res = await $api.auth.signUp(payload)
      setToken(res.token)

      setAuthSuccess(true)

      return res
    } catch (err) {
      setAuthFailure()
      console.error(err)

      return err
    }
  }

  async function signIn(payload) {
    try {
      setAuthStart()

      const res = await $api.auth.signIn(payload)
      console.log(res)
      setToken(res.token)

      setAuthSuccess(true)

      return res
    } catch (err) {
      setAuthFailure()
      console.error(err)

      return err
    }
  }

  async function signOut() {
    try {
      setAuthStart()

      const res = await $api.auth.signOut()
      removeToken()

      setAuthSuccess(false)

      return res
    } catch (err) {
      setAuthFailure()
      console.error(err)

      return err
    }
  }

  // getters

  // mutations
  function setAuthStart() {
    entities.value.isAuth = false
    pending.value = true
    error.value = null
  }

  function setAuthSuccess(value) {
    entities.value.isAuth = value
    pending.value = false
  }

  function setAuthFailure(error) {
    entities.value.isAuth = false
    pending.value = false
    error.value = error
  }

  // helpers
  function setToken(value) {
    setTokenCO(value)
    setTokenLS(value)
  }

  function removeToken(value) {
    removeTokenCO(value)
    removeTokenLS(value)
  }

  return {
    entities,
    pending,
    error,
    signUp,
    signIn,
    signOut,
  }
})
