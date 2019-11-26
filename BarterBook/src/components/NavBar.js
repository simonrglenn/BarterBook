import React from 'react'

const NavBar = (props) => {
    return (
        <div>
            <span data-page='dashboard'>Dashboard</span>
            <span data-page='profile'>My Profile</span>
            <span data-page='new-currency'>Make a New Currency</span>
        </div>
    )
}

export default NavBar