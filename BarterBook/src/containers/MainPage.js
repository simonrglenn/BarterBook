import React from 'react'
import {connect} from 'react-redux'
import CurrencyContainer from './CurrencyContainer'

const MainPage = (props) => {
    return(
        <div>
            <CurrencyContainer />
            <h4>"Main Page"</h4>
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

export default connect(msp,mdp)(MainPage)