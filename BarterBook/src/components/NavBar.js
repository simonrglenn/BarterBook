import React from 'react'
import SearchBar from './SearchBar'

const NavBar = (props) => {
    return (
        <div>
            <SearchBar />
            <span data-page='dashboard'>Dashboard</span>
            <span data-page='profile'>My Profile</span>
            <span data-page='new-currency'>Make a New Currency</span>
            <span data-page='log-out'>Log Out</span>

        </div>
    )
}

export default NavBar