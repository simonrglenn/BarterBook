import React from 'react'
import {connect} from 'react-redux'
import CurrencyContainer from './CurrencyContainer'

const SideBar = (props) => {
    return(
        <div>
            <CurrencyContainer />
            <h4>"Side Bar"</h4>
        </div>
    )
}

const msp = (state) => {
    return(
        {
        }
    )
}

const mdp = (dispatch) => {
    return(
        {
        }
    )
}

export default connect(msp,mdp)(SideBar)