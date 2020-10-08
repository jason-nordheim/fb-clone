import { useContext } from 'react'
import { StateContext } from "./StateContext"

/* hook to get the global state/context */
export const useStateValue = () => useContext( StateContext )
export default useStateValue