<template>
  <main>
    <TheHeader />
    <a-button @click="getTodo">button ant</a-button>
  </main>
</template>

<script setup>
import TheHeader from "../components/The/TheHeader.vue"
import { useAppApi } from "../composables/useAppApi"
const { api } = useAppApi()

// fetch data example
async function getTodo() {
  const res = await api.todo.getById({ id: 1 })
  console.log(res.data)
}
</script>
