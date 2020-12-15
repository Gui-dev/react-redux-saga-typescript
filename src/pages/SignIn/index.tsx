import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { signInRequest } from '../../store/modules/auth/actions'
import { IStoreState } from '../../store/types'

import './style.css'

export const SignIn: React.FC = () => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { isSignedIn, loadingSignInRequest } = useSelector((state: IStoreState) => state.auth)
  const dispatch = useDispatch()

  const handleSubmit = useCallback(() => {
    dispatch(signInRequest({email, password}))
  }, [dispatch, email, password])

  console.log('isSignedIn', isSignedIn)
  console.log('loadingSignInRequest', loadingSignInRequest)

  return (
    <div className="sign-in-page">
      {/* <img src={logo} alt="CL Logo" /> */}
      <input 
        type="email"
        value={ email }
        onChange={ e => setEmail(e.target.value) }
      />
      <input 
        type="password" 
        value={ password }
        onChange={ e => setPassword(e.target.value) } 
      />
      <button onClick={ handleSubmit }>
        { loadingSignInRequest ? 'Carregando...' : 'Entrar' }
      </button>
    </div>
  )
}
