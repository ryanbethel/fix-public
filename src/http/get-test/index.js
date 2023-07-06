const asap = require('@architect/shared/src/asap.js')
export const handler = (stuff) => {
  console.log("in get-test handler")
  return asap(stuff)
}
