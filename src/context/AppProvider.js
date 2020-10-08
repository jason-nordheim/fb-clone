import React, { useReducer } from 'react'
import { AppContext } from './AppContext'

/* 
 * Higher Order component to Inject Global Application Context, 
 * 
 */
export const AppProvider = ({ reducer, initialState, children }) => (
  <AppContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AppContext.Provider>
)


export default AppProvider 
