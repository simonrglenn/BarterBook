import React from 'react';
import {connect} from 'react-redux'
import './App.css';

import LoginContainer from './containers/LoginContainer';
import NavBar from "./components/NavBar"
import Dashboard from './containers/Dashboard';

const App = (props) => {

  return (
    <div className="App">
      {
      props.loggedInUser ? 
      <div class="navAndDash"> 
        < NavBar /> < Dashboard /> 
      </div>
      :
      < LoginContainer />
      }
    </div>
  )
}

const msp = () => {

}

export default connect(msp,null)(App);