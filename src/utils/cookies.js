function setItemCO(cookie, key, data) {
  try {
    const options = {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    }

    cookie.set(key, data, options)
  } catch (err) {
    return null
  }
}

function removeItemCO(cookie, key, data) {
  try {
    const options = {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    }

    cookie.remove(key, data, options)
  } catch (err) {
    return null
  }
}

export { setItemCO, removeItemCO }
