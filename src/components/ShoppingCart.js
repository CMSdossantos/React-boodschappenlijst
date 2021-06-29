import React from "react"
import List from "./List"

function ShoppingCart(props){
    return(
        <div style={{display: "block", margin: "50px", width: "100%"}}>
            <h1>Winkelmand</h1>
            <button>leeg winkelmand</button>
            <List arr={props.arr} amountToList={true}/>
        </div>
    )
}

export default ShoppingCart