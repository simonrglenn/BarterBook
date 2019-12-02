import React from 'react';
import {connect} from 'react-redux'
import './App.css';

import LoginContainer from './containers/LoginContainer';
import NavBar from "./components/NavBar"
import SideBar from "./containers/SideBar"
import MainContent from './containers/MainContent';

const App = (props) => {
	return (
		props.loggedInUser ? 
		<div id="meatNpotatoes"> 
			< NavBar />
			< SideBar />
			< MainContent />
		</div>
		: < LoginContainer />
	)
}

const msp = () => {

}

export default connect(msp,null)(App);