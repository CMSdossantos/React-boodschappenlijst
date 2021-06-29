import React from "react"
import List from "./List"
import InputField from "./InputField"

function GroceryList(props){
    return(
            <div style={{display: "block", margin: "50px", width: "100%"}}>
                <h1> Boodschappen lijst </h1>
                <InputField handleInput={props.handleInput} inputLine={props.inputLine} />
                <button>Voeg toe</button>
                <List arr={props.arr} amountToList={false}/>
            </div>
            
    )
}

export default GroceryList