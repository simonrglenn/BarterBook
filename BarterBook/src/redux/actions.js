export function LoginUser(payload){
    return ({
        type: "LoginUser",
        payload: payload
})
}

export function LogoutUser(){
    return ({type: "LogoutUser"})
}


