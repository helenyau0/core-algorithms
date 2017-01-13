import { expect } from 'chai'
import setSymmetricDifference from '../src/setSymmetricDifference'

describe( 'setSymmetricDifference', () => {
  it( 'Return the symmetric difference of the two sets', () => {
    expect(setSymmetricDifference([1, 2, 3, 4], [2, 4, 6, 8])).to.deep.equal([1, 3, 6, 8])
  })
})
