import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import * as features from './features'

function reducer(state, { type, payload }) {
  const handlers = Object.values(features).reduce((handlers, { reducers }) => {
    const handler = reducers[type]
    return handler ? handlers.concat(handler) : handlers
  }, [])

  if (handlers.length === 0 && !type.match(/^@/)) {
    console.warn('UNKNOWN ACTION:', type)
  }

  return handlers.reduce((state, handler) => handler(state, payload), state)
}
const middleware = [thunk]

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)
