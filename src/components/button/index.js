import React from "react";
import "./Button.css";

const Button = (props) => {
    return (
        <div className='button' onClick={props.onClick}>
              <div className='offer'>{props.content}</div>
              </div> 
    )
}

export default Button;