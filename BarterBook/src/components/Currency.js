import React from 'react'

const Currency = (props) => {

    return (
        <div>
            <img src={props.img_url}/>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
            <button>Propose a Barter!</button>
        </div>
    )
        
}

export default Currency