export default function setUnion(set1, set2) {
  let newArray = set1.concat(set2)
  return [...new Set(newArray)]
}
