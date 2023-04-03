import { getClone } from "~/utils/getClone"

export function loggerAsyncExample(data, next) {
  console.log("logger async")
  console.log(data)

  setTimeout(() => {
    console.log("timer")

    const dataClone = getClone(data)
    // ... other mutation dataClone

    return next(dataClone)
  }, 2000)
}
