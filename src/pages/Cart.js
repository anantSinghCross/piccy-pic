import React, { useContext, useState } from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

let Cart = () => {

    const {cartItems, removeCartItem} = useContext(Context)
    const cartItemElements = cartItems.map(currentItem => <CartItem key={currentItem.id} item={currentItem} />)

    const total = 5.99*(cartItemElements.length)
    const [buttonString, setButtonString] = useState("Place Order")

    const showPlaceOrderButton = () => {
        if(cartItems.length){
            return (
                <div className="order-button">
                    <button onClick={placeOrder}>{buttonString}</button>
                </div>
            )
        }
    }

    const placeOrder = () => {
        setButtonString("Ordering...")

        setTimeout(() => {
            setButtonString("Place Order")
            cartItems.map(item => removeCartItem(item))
            // alert("Order has been placed!")
            console.log("Order Placed!")
        },3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            
            {cartItemElements}
            
            <p className="total-cost">Total: {total.toLocaleString('en-IN', {style:'currency', currency:'INR'})}</p>
            {showPlaceOrderButton()}
        </main>
    )
}

export default Cart