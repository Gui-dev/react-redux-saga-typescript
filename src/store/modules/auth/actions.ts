import { action } from 'typesafe-actions'

import { TYPES_AUTH } from './reducer'

interface ISignInRequestProps {
  email: string
  password: string
}

interface ISignInSuccessProps {
  token: string
}

export const signInRequest = ({ email, password }: ISignInRequestProps) => {
  return action(TYPES_AUTH.signInRequest,  {
    email,
    password
  })
}

export const signInSuccess = ({ token }: ISignInSuccessProps) => {
  return action(TYPES_AUTH.signInSuccess, {
    token
  })
}

export const signInFailure = () => {
  return action(TYPES_AUTH.signInFailure)
}