const coding = (val) => {
  let buffer = ''
  let textArray = val.split(/[ !\\?',;\\.，。；、\\！]+/)
  let symbol = val.match(/[^a-zA-Z0-9\u4e00-\u9fa5]+/g).join('')
  let symbolArray = symbol.split('')
  let i = 0
  textArray.forEach(item => {
    let shuffle = this.shuffleString(item.split(''))
    if (symbolArray[i] === undefined) buffer += shuffle.join('')
    else buffer += shuffle.join('') + symbolArray[i]
    ++i
  })
  this.codingOut = buffer
}

const shuffleString = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

export default {
  coding,
  shuffleString
}
