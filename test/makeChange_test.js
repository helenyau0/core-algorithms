import { expect } from 'chai'
import makeChange from '../src/makeChange'

describe('makeChange()', function(){

  it('should be a function', function(){
    expect(makeChange).to.be.a('function')
  })

  it('returns an object with all coin types (quarters, dimes, nickels, and pennies)', function(){
    let change = makeChange(100, 100)
    expect(change).to.be.an('object')
    expect(change).to.have.keys('quarters', 'dimes', 'nickels', 'pennies')
    expect(change).to.deep.equal({
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    })
  })

  it('returns correct change', function(){
    expect(makeChange(100, 141)).to.deep.equal({
      quarters: 1,
      dimes: 1,
      nickels: 1,
      pennies: 1,
    })
  })

  it('minimizes the number of coins given by using the most high-value coins', function(){
    expect(makeChange(100, 168)).to.deep.equal({
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 3,
    })

    expect(makeChange(100, 169)).to.deep.equal({
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 4,
    })

    expect(makeChange(100, 170)).to.deep.equal({
      quarters: 2,
      dimes: 2,
      nickels: 0,
      pennies: 0,
    })
  })
})
