export default function setSymmetricDifference(a, b) {
  let emptyArray = []

  for ( let i = 0; i < a.length; i++ ) {
    if ( !(b.includes( a[i] )) ) {
     emptyArray.push(a[i])
    }
  }

  for ( let n = 0; n < b.length; n++ ) {
    if ( !(a.includes( b[n] )) ) {
     emptyArray.push(b[n])
    }
  }
  return emptyArray
}
