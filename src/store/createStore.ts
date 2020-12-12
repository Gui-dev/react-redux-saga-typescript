import { applyMiddleware, createStore, Middleware, Reducer } from 'redux'

import { StoreAction, IStoreState } from './types'

// eslint-disable-next-line import/no-anonymous-default-export
export default (reducers: Reducer<IStoreState, StoreAction>, middlewares: Middleware[]) => {

  const enhancer = applyMiddleware(...middlewares)
  return createStore(reducers, enhancer)
}