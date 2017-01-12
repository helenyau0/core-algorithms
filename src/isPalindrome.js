export default function isPalindrome(string) {
  let regex = /[\W_]/g
  let check = string.toLowerCase().replace(regex, '')
  let emptyString = ''

  for(let i = check.length - 1; i >= 0; i--) {
    emptyString += check[i]
  }
  return (check === emptyString)
}
