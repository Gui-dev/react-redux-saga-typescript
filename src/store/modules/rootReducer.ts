import { combineReducers } from 'redux'
import { IStoreState } from '../types'

import { auth } from './auth/reducer'

export default combineReducers<IStoreState>({
  auth
})