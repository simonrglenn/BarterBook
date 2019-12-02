import react from 'react'
import {connect} from 'react-redux'
import currency from '../components/Currency'

const currencyContainer = (props) => {
    return(
        props.currencies.map
    )
}

const msp = (state) => {
    return(
        {
            currencies: state.currencies
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