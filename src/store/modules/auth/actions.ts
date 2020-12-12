import { action } from 'typesafe-actions'

import { TYPES_AUTH } from './reducer'

interface ISignInRequestProps {
  email: string
  password: string
}

export const signInRequest = ({ email, password }: ISignInRequestProps) => {
  return action(TYPES_AUTH.signInRequest,  {
    email,
    password
  })
}