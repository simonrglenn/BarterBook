import React from 'react'
import Login from '../components/Login'
import Register from '../components/Register'
import {connect} from 'react-redux'

class LoginContainer extends React.Component {
    
    state = {
        registering: false
    }
    
    toggleRegistering = () => {
        this.setState({registering: !this.state.registering})
    }
    
    render(){
        return(
            <div class="login-container">
            {this.state.registering ? 
                <div class="login-container">
                <Register />
                <button onClick={this.toggleRegistering}>Already have a login?</button>
                </div>
            :
                <div class="login-container">
                <Login />
                <button onClick={this.toggleRegistering}>Need to register?</button>
                </div>
            }
            </div>
        )
    }
}

const msp = ( state ) => {
    return (
        {}
        )
    }
    
const mdp = ( dispatch ) => {
    return (
        {}
        )
    }
    

export default connect(msp, mdp)(LoginContainer)