import React from "react"

function InputField(props) {
   
    return (
        <input type="text" value={props.inputLine} onChange={props.handleInput} />
    )
}

export default InputField