export const paddingZero = (value, length = 3) => value.toString().padStart(length, '0')

export const deepCopy = (obj) => JSON.parse(JSON.stringify(obj))

export const sleep = (ms = 300) => (
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
)
