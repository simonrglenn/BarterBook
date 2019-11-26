import React from 'react'
import SearchBar from './SearchBar'
import {connect} from 'react-redux'

const NavBar = (props) => {
    return (
        <div>
            <span>"LOGO"</span>
            <SearchBar />
            <span data-page='dashboard'>Dashboard</span>
            <span data-page='new-currency'>Make a New Currency</span>
            <span data-page='log-out'>Log Out</span>
        </div>
    )
}

const mdp = (dispatch) => {
    return(
        {
            something: null
        }
    )
}

export default connect(null,mdp)(NavBar)