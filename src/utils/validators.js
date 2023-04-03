function getIsEmail(value) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([А-Яа-яЁёa-zA-Z\-0-9]+\.)+[А-Яа-яЁёa-zA-Z]{2,}))$/.test(
    value
  )
}

function getIsPhone(value) {
  return /^[0-9\-()\s+]{18}$/.test(value) && /^.{4}9/.test(value)
}

export default {
  getIsEmail,
  getIsPhone,
}
