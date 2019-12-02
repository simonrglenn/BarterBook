import React from 'react'
import {connect} from 'react-redux'
import CurrencyContainer from './CurrencyContainer'

const MainContent = (props) => {
    return(
        <div>
            <CurrencyContainer />
            <h4>"Main Content"</h4>
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

export default connect(msp,mdp)(MainContent)