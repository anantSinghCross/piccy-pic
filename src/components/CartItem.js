import React, { useContext, useState } from "react"
import {Context} from "../Context"
import useHover from "../hooks/useHover"

let CartItem = (props) => {

    const {removeCartItem} = useContext(Context)
    const {hovered, ref} = useHover()

    const price = 5.99.toLocaleString('en-IN', {style:'currency', currency:'INR'})
    const classString = hovered? "ri-delete-bin-fill":"ri-delete-bin-line"

    return(
        <div className="cart-item">
            <i ref={ref} className={classString} onClick={() => removeCartItem(props.item)}></i>
            <img src={props.item.url} width="130px" />
            <p>{price}</p>
        </div>
    )
}

export default CartItem