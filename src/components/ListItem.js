import React from "react"

function ListItem(props) {
    // console.log(props);
    const listColor = props.pos % 2 === 1 ? "#ccffff" : "#99ffff"
    const inlineStyle = {backgroundColor: listColor, listStyleType: "none", }
    const tag = props.amount <= 1 ? "" : ` x${props.amount}` ;

    return (
        <li style={inlineStyle} >{ props.amountToList ? props.title + tag : props.title }</li>
    )
}
// props.title + props.amount
export default ListItem