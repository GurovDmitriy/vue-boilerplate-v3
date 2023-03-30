<template>
  <main>
    <TheHeader />
    <a-button>button ant</a-button>
  </main>
</template>

<script setup>
import TheHeader from "../components/The/TheHeader.vue"
import { onMounted } from "vue"
import { useAppApi } from "../composables/useAppApi"
const { api } = useAppApi()

onMounted(async () => {
  const res = await api.todo.getById({ id: 1 })
  console.log(res)
})
</script>
