import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'

describe( 'isPalindrome()', () => {
  it( '', () => {
    expect(isPalindrome).to.be.a( 'function' )
  })

  it( 'Take in a string and reverse it', () =>  {
    expect(isPalindrome( 'radar' )).to.deep.equal( true )
  })

  it( 'Check if all letters in a string can be read backwars and forwards', () => {
    expect(isPalindrome( 'A man, a plan, a canal: Panama' )).to.deep.equal( true )
  })

})
