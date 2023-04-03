export const exampleAdapter = {
  // payload
  to(data) {
    const newData = {}
    newData.id = data.someId
    return newData
  },

  // response
  from(data) {
    const newResponse = {
      ...data,
      customField: "customValue",
    }

    return newResponse
  },
}
