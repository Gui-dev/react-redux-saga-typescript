import { IAuthState, AuthAction } from './types'

export const TYPES_AUTH = {
  signInRequest: '@auth/SIGN_IN_REQUEST',
  signInSuccess: '@auth/SIGN_IN_SUCCESS',
  signInFailure: '@auth/SIGN_IN_FAILURE'
}

const INITIAL_STATE: IAuthState = {
  loadingSignInRequest: false,
  isSignedIn: false,
  error: false,
  token: null 
}

export const auth = (state = INITIAL_STATE, action: AuthAction): IAuthState => {

  switch (action.type) {
    case TYPES_AUTH.signInRequest:
      return {
        ...state,
        loadingSignInRequest: true
      }

    case TYPES_AUTH.signInSuccess:
      return {
        ...state,
        loadingSignInRequest: false,
        isSignedIn: true,
        // token: action.payload.token,
      }

    case TYPES_AUTH.signInFailure:
      return {
        ...state,
        loadingSignInRequest: false,
        error: true
      }
  
    default:
      return state
  }
}