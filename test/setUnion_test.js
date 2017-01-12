import { expect } from 'chai'
import setUnion from '../src/setUnion'

describe.only('setUnion()', () => {
  it('Return the union of two sets', () => {
    expect(setUnion([1, 2, 3, 4], [2, 4, 6, 8])).to.deep.equal([1, 2, 3, 4, 6, 8])
  })
})
