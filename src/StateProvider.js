import React, { createContext, useContext, useReducer } from 'react'

/* Create the context  */
export const StateContext = createContext() 

/* Higher Order component to Inject State Context, 
 * will be wrapping the application 
*/
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)