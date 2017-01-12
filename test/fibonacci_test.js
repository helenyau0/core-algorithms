import {expect} from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci', () => {
  it('Returns the sequence of numbers by adding up the two numbers before it', () => {
    expect(fibonacci(10)).to.deep.equal([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
  })
})
