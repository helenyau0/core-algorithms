import { expect } from 'chai'
import factorial from '../src/factorial'

describe('factorial()', () => {
  it('Returns the factorial of a number', () => {
    expect(factorial(3)).to.deep.equal(6)
  })

  it('Can return the factorial of larger numbers', () => {
    expect(factorial(5)).to.deep.equal(120)
    expect(factorial(7)).to.deep.equal(5040)
  })
})
