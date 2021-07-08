import React, { createContext, useReducer } from 'react'
import { LOGIN_STATE, loginReducer } from './reducers'

export const CarwashContext = createContext()

export const AppContext = ({ children }) => {
  const [loginState, loginDispacth] = useReducer(loginReducer, LOGIN_STATE)

  return (
    <CarwashContext.Provider
      value={{
        loginState,
        loginDispacth,
      }}
    >
      {children}
    </CarwashContext.Provider>
  )
}
