import * as features from '.'

describe('features', () => {
  it('exports map', () => {
    expect(Array.isArray(features)).toEqual(false)
    expect(typeof features).toEqual('object')
  })

  it('maps to valid features', () => {
    Object.values(features).forEach(f => {
      expect(f.render).toBeInstanceOf(Function)
      expect(typeof f.reducers).toEqual('object')
    })
  })
})
