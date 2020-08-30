import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
  const [state, dispatch] = useStateValue(); 

  function signIn(e){
    e.preventDefault() 
    auth.signInWithPopup(provider)
      .then(res => dispatch({type: actionTypes.SET_USER, user: res.user}))
      .catch(err => alert(err.message))
  } 
  
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
          alt="facebook-logo"
        />
        <h2>facebook</h2>
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login
