import React from 'react'

const Currency = (props) => {

    return (
        <div>
            <img src={props.img_url}/>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        </div>
    )
        
}

export default Currency