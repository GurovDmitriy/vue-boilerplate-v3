import { camelToKebab } from "./camelToKebab"

export function bem(name, mods = {}) {
  const result = [name]

  for (const [mod, value] of Object.entries(mods)) {
    if (value === true) {
      result.push(`${name}--${camelToKebab(mod)}`)
    } else if (value) {
      result.push(`${name}--${camelToKebab(mod)}--${camelToKebab(value)}`)
    }
  }

  return result.join(" ")
}
