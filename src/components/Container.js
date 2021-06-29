import React from "react"
import ShoppingCart from "./ShoppingCart"
import GroceryList from "./GroceryList"

class Container extends React.Component{
    constructor(){
        super()
        this.state = {
            inputLine: "",
            uniqueID: 1,
            groceryItems: 
            [   { id: 1, title: "kaas", amount: 0},
                { id: 6, title: "ham", amount: 0},
                { id: 3, title: "broodje", amount: 0}  ],
            shoppingListItems: [{ id: 4, title: "meloen", amount: 0}]
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleClick(event) {
        let bothDrafts = this.state.groceryItems.concat(this.state.shoppingListItems)

        for(let i=1; i < 25; i++) {
            if(!bothDrafts.some(ele => ele.id === i)){
                this.setState({ uniqueID: i }, handling);
                break
            } 
        }

        function handling() {
            this.state.groceryItems.forEach( (item) => {
                //als user klikt op boodschappen items. (linkerkant)
                if(item.title === event.target.innerHTML) {
                    if(!this.state.shoppingListItems.some(ele => ele.title === event.target.innerHTML)){
                        const newShoppingItems = this.state.shoppingListItems.push(
                            { id: this.state.uniqueID, title: item.title, amount: item.amount+1 }
                            )
                        this.setState( {newShoppingItems})
                    } else {
                        const amountAdd = this.state.shoppingListItems.find(ele => ele.title === event.target.innerHTML ? ele : null)
                        amountAdd.amount = amountAdd.amount +1;
                        this.setState({amountAdd})
                    }
                    
                }   
            })
            // "voeg toe" knop 
            if("Voeg toe" === event.target.innerHTML && this.state.inputLine !== "" ) {        
                const newAddedGrocery =  this.state.groceryItems.push(
                    {id: this.state.uniqueID, title: this.state.inputLine, amount: 0}
                    )
                this.setState({inputLine: ""})
                this.setState({newAddedGrocery})
            }
            // "leeg winkelmand" knop
            if("leeg winkelmand" === event.target.innerHTML) {
                this.setState({shoppingListItems: []})
            } 
        }    
} 
    //de onChanged event voor de <input>
    handleInput(changed){
        const {value} = changed.target
        this.setState( {inputLine: value})
    }

    render(){
        return(
            <div style={{display: "flex"}} onClick={this.handleClick}>
                
                <GroceryList arr={this.state.groceryItems} handleInput={this.handleInput} inputLine={this.state.inputLine}/>
                <ShoppingCart arr={this.state.shoppingListItems} />
            </div>
        )
    }
}
export default Container