import react from 'react'
import {connect} from 'react-redux'
import currency from '../components/Currency'

const currencyContainer = (props) => {
    return(
        "list of currency"
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

export default connect(msp,mdp)(currencyContainer)