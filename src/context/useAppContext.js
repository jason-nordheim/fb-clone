import { useContext } from 'react'
import { AppContext } from "./AppContext"

/* hook to get the global state/context */
export const useAppContext = () => useContext( AppContext )
export default useAppContext