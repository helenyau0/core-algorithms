export default function fibonacci(number) {
  let emptyArray = []
  let startPoint = 0
  for(let i = 0; i < number; i++) {
    if(i === 0 || i === 1) {
      startPoint += i
      emptyArray.push(startPoint)
  } else if (i > 1) {
      let newIndex = emptyArray[i-1] + emptyArray[i-2]
      emptyArray.push(newIndex)
    }
  }
  return emptyArray
}
