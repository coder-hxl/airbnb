import { CSSProperties } from 'react'

interface ICSSProperties extends CSSProperties {
  [key: string]: any
}

function styleStrToObject(str: string) {
  const obj: ICSSProperties = {}

  const s = str
    .toLowerCase()
    .replace(/-(.)/g, function (m, g) {
      return g.toUpperCase()
    })
    .replace(/;\s?$/g, '')
    .split(/:|;/g)

  for (let i = 0; i < s.length; i += 2) {
    obj[s[i].replace(/\s/g, '')] = s[i + 1].replace(/^\s+|\s+$/g, '')
  }

  return obj
}

export default styleStrToObject
