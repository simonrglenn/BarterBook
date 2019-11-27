import React from 'react';
import {connect} from 'react-redux'
import './App.css';

import LoginContainer from './containers/LoginContainer';
import NavBar from "./components/NavBar"
import MainPage from "./containers/MainPage"
import SideBar from "./containers/SideBar"

const App = (props) => {
	return (
		<div className="App">
			{props.loggedInUser
			? 
			<div id="meatNpotatoes"> 
				< NavBar />
				< SideBar />
				< MainPage />
			</div>
			:
				< LoginContainer />}
		</div>
	)
}

const msp = () => {

}

export default connect(msp,null)(App);