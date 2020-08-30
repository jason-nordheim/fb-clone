import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'

function Login() {

  const signIn = e => {
    // todo: sign in 
  } 
  
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
          alt="facebook-logo"
        />
        <h3>facebook</h3>
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login
