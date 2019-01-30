import React from 'react';
import './person.css'

const person = (props) => {

    return (
    <div className="Person">
        <p onClick = {props.click}> I am a {props.name} and i am {props.age} old!</p>
        <p>{props.children}</p>
        <input  type = "text" value={props.name} onChange={props.changed}  /> 
    </div>
    )

};

export default person;