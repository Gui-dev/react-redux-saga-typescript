import createSagaMiddleware from 'redux-saga'
import { Middleware } from 'redux'

import rootReducer from './modules/rootReducer'
import { rootSaga } from './modules/rootSaga'
import createStore from './createStore'

const sagaMiddleware = createSagaMiddleware()
const middlewares: Middleware[] = [sagaMiddleware]

const store = createStore(rootReducer, middlewares)

sagaMiddleware.run(rootSaga)

export {
  store
}