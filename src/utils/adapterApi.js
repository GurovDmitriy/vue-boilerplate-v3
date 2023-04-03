export async function adapterApi(data, format, cb) {
  const payloadFormat = format.to(data)

  const response = await cb(payloadFormat)

  const responseFormat = format.from(response)

  return responseFormat
}

// example usage
//
// const {$api} = useNuxtApp()
//
// const data = {
//   someId: 1,
// }
//
// async function fetchTodo() {
//   const res = await adapterApi(data, exampleAdapter, async (data) => await $api.todos.getById(data))
//   console.log(res)
// }
//
// example write adapter
//
// export const exampleAdapter = {
//   // payload
//   to(data) {
//     const newData = {}
//     newData.id = data.someId
//     return newData
//   },
//
//   // response
//   from(data) {
//     const newResponse = {
//       ...data,
//       customField: "customValue",
//     }
//
//     return newResponse
//   },
// }
