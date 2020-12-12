import { TYPES_AUTH } from './reducer'

interface ISignInRequestProps {
  email: string
  password: string
}

export const signInRequest = ({ email, password }: ISignInRequestProps) => {
  return {
    type: TYPES_AUTH.signInRequest,
    payload: {
      email,
      password
    }
  }
}