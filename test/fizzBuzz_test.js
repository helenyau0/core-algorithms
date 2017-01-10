import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz'

describe( 'fizzBuzz()', () => {
  it( 'should be a function', () => {
    expect(fizzBuzz).to.be.a( 'function' )
  })

  it( 'Return fizz for mutliples of three', () => {
    expect(fizzBuzz()[2]).to.deep.equal('Fizz')
  })

  it( 'Return buzz for multiples of five', () => {
    expect(fizzBuzz()[4]).to.deep.equal('Buzz')
  })

  it( 'Return FizzBuzz for multiples of five and three', () => {
    expect(fizzBuzz()[14]).to.deep.equal('FizzBuzz')

  })

})
