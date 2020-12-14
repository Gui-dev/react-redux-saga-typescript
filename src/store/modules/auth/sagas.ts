import { ActionType } from "typesafe-actions"
import { all, call, put, takeLatest } from 'redux-saga/effects'

import { TYPES_AUTH } from './reducer'
import * as actions from './actions'
import { api } from "../../../services/api"

export function* signIn ({ payload }: ActionType<typeof actions.signInRequest>) {
  try {
    const { email, password } = payload
    const { data } = yield call(api.post, '', { email, password })

    yield put(actions.signInSuccess({ token: data.token }))
  } catch (error) {
    yield put(actions.signInFailure())
  }
}

export default all([
  takeLatest(TYPES_AUTH.signInRequest, signIn)
])