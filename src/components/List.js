import React from "react"
import ListItem from "./ListItem"



function List(props) {
        const gettingItemTitles = props.arr.map( (obj, pos) =>
         <ListItem key={obj.id} title={obj.title} pos={pos} amount={obj.amount} amountToList={props.amountToList} />
        )

        return (
            <ul style={{ margin: 0, padding: 0, display: "block", width: "100%" }}>
                {gettingItemTitles}
            </ul>
        )
}

export default List