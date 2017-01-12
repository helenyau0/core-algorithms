export default function setUnion(a, b) {
  let newArray = a.concat(b)
  return [...new Set(newArray)]
}
