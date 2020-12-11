interface ISignInRequestProps {
  email: string
  password: string
}

export const signInRequest = ({ email, password }: ISignInRequestProps) => {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {
      email,
      password
    }
  }
}