export default function isPalindrome(string) {
  // let regex = (/^[0-9.,:;]+$/)
  let regex = /[\W_]/g
  let check = string.toLowerCase().replace( regex, '' )
  let emptyArray = ''

  for( let i = check.length - 1; i >= 0; i-- ) {
      emptyArray += check[i]
  }

  if (check === emptyArray ) {
    return true
  } else {
    return false
  }
  return emptyArray
}
