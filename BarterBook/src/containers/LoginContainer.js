import React from 'react'
import Login from '../components/Login'
import Register from '../components/Register'

const LoginContainer = (props) => {

    if (loggedInUser){
        return null
    }
    else if (userNeeds2Register){
        return <Register />
    }
    else {
        return <Login />
    }
}

export default LoginContainer