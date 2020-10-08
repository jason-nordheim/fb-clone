import React, { useReducer } from 'react'
import { StateContext } from './StateContext'

/* Higher Order component to Inject State Context, 
 * will be wrapping the application  */
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)


export default StateProvider 
