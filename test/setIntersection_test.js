import {expect} from 'chai'
import setIntersection from '../src/setIntersection'

describe.only('setIntersection()', () => {
  it('Return the intersection of two sets.', () => {
    expect(setIntersection([1, 2, 3, 4], [2, 4, 6, 8])).to.deep.equal([2, 4])
  })
})
