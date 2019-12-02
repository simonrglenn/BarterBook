import React from 'react'
import {connect} from 'react-redux'

import {LoginUser} from '../redux/actions'

const Login = (props) => {
    return (
        <div class="login">
            <form onSubmit={event => {
                event.preventDefault()
                props.loggedinuser(event.target.value)
            }}>
                <input type="text" placeholder="Login Username"></input>
                <input type="submit"></input>
            </form>
        <h2>{props.testkey}</h2>
        </div>
    )
}

const msp = (state) => {
    return (
        {
            testkey: state.loggedInUser
        }
    )
}

const mdp = (dispatch) => {
    return (
        {
            loggedinuser: (payload) => dispatch(LoginUser(payload))
        }
    )
}

export default connect(msp,mdp)(Login)