import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'

describe( 'isPalindrome()', () => {
  it( 'Should be a function', () => {
    expect(isPalindrome).to.be.a( 'function' )
  })

  it( 'Take in a string and reverses it', () =>  {
    expect(isPalindrome( 'radar' )).to.deep.equal( true )
  })

  it( 'Check if all letters in a string can be read backwards and forwards', () => {
    expect(isPalindrome( 'A man, a plan, a canal: Panama' )).to.deep.equal( true )
  })

})
