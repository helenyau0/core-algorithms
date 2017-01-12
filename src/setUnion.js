export default function setUnion(a, b) {
  let emptyArray = []
  for(let i = 0; i < a.length; i++) {
    for(let n = 0; n < b.length; n++) {
      if(a[i] != b[n]) {
        emptyArray.push(a[i])
      } else {
        emptyArray.pop(a[i])
      }
    }
    return emptyArray
  }
}
