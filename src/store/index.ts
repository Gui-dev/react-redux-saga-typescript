import rootReducer from './modules/rootReducer'
import createStore from './createStore'

const store = createStore(rootReducer, [])

export {
  store
}