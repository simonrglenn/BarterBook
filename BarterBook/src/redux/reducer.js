const defaultState = {
    loggedInUser: null
};

const reducer = (prevState = defaultState, action) => {
    switch(action.type){
    case "LoginUser":
        return ({...prevState, loggedInUser: action.payload})
    case "LogoutUser":
        return ({...prevState, loggedInUser: null})
    default:
        return prevState
    }
}

export default reducer
