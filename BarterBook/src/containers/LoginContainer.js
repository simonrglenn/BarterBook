import React from 'react'
import Login from '../components/Login'
import Register from '../components/Register'

class LoginContainer extends React.Component {
    
    state = {
        registering: false
    }
    
    toggleRegistering = () => {
        this.setState({registering: !this.state.registering})
    }
    
    render(){
        return(
            this.state.registering ? 
                <div class="login-container">
                <Register />
                <button onClick={this.toggleRegistering}>Already have a login?</button>
                </div>
            :
                <div class="login-container">
                <Login />
                <button onClick={this.toggleRegistering}>Need to register?</button>
                </div>
            
        )
    }
}

export default LoginContainer