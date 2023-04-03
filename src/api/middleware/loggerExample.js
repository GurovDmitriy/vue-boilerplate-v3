import { getClone } from "~/utils/getClone"

export function loggerExample(data, next) {
  console.log("logger")
  console.log(data)

  const dataClone = getClone(data)
  // ... other mutation dataClone

  return next(dataClone)
}
