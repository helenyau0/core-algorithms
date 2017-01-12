const isEven = n => n % 2 == 0
const isOdd = n => Math.abs(n % 2) == 1
const equalsOne = n => (n == 1)

const collatzConjecture = (num, conjecture = []) => {
  if(!conjecture.length) {conjecture.push(num)}
  if (!equalsOne(num)) {
    if(isEven(num)) {
      const evenVar = (num / 2)
      conjecture.push(evenVar)
      collatzConjecture(evenVar, conjecture)
    }
    if (isOdd(num)) {
      const oddVar = ((num * 3) + 1)
      conjecture.push(oddVar)
      collatzConjecture(oddVar, conjecture)
    }
  }

  return conjecture
}

export default collatzConjecture
