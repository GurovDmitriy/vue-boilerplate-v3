function getItemLS(key) {
  return JSON.parse(localStorage.getItem(key))
}

function setItemLS(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

export { getItemLS, setItemLS }
