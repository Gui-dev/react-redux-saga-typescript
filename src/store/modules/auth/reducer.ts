import { IAuthState, AuthAction } from './types'

export const TYPES_AUTH = {
  signInRequest: '@auth/SIGN_IN_REQUEST'
}

const INITIAL_STATE: IAuthState = {
  loadingSignInRequest: false,
  isSignedIn: false
}

export const auth = (state = INITIAL_STATE, action: AuthAction): IAuthState => {
  switch (action.type) {
    case TYPES_AUTH.signInRequest:
      return {
        ...state,
        loadingSignInRequest: true
      }
  
    default:
      return state
  }
}