import { expect } from 'chai'
import setCompliment from '../src/setCompliment'

describe( 'setCompliment', () => {
it( 'Return the compliment of two sets', () => {
  expect(setCompliment([ 1, 2, 3, 4 ],[2, 4, 6, 8])).to.deep.equal([6, 8])
} )
})
