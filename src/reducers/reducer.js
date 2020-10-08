import { actionTypes } from './actionTypes'

export const reducer = (state, action) => {
  switch(action.type){
    case actionTypes.SET_USER: 
      return {
        ...state, 
        user: action.user
      }
    default: 
      return state 
  }
}

export default reducer 