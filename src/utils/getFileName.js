export function getFileName(value) {
  let fileName = null
  let match = null

  if (value) {
    // TODO: refactor for svg jpg png and other...
    match = value.match(/([-_a-zA-Z]+)\.([-_a-zA-Z]+)$/)
  }

  if (match) {
    fileName = match[1]
  }

  return fileName
}
