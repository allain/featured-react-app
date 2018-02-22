import * as Feature from './index'

describe('Users', () => {
  it('exports reducers map', () => {
    expect(Array.isArray(Feature.reducers)).toEqual(false)
    expect(typeof Feature.reducers).toEqual('object')
    expect(typeof Feature.reducers.LOGIN_SUCCESS).toEqual('function')
  })
})
