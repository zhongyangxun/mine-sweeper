export const paddingZero = (value, length = 3) => {
  const valueLen = value.toString().length
  if (valueLen >= length) {
    return value
  }

  return `${(new Array(length - valueLen).fill('0').join(''))}${value}`
}

export const deepCopy = (obj) => JSON.parse(JSON.stringify(obj))
