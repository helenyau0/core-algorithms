export default function setIntersection(set1, set2) {
  let newArray = []
  for(let i = 0; i < set1.length; i++) {
    for(let n = 0; n < set2.length; n++) {
      if(set1[i] === set2[n]) {
        newArray.push(set1[i])
      }
    }
  }
  return newArray
}
