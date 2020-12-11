import React from 'react'

import './style.css'

export const SignIn: React.FC = () => {
  

  return (
    <div className="sign-in-page">
      {/* <img src={logo} alt="CL Logo" /> */}
      <input type="text" defaultValue="test@email.com" />
      <input type="password" defaultValue="12345678" />
      <button>
        Entrar
      </button>
    </div>
  )
}
