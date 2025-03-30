import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import emptyimg from "../../images/emptycart.webp";
function Cart() {
    const {
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
        totalUniqueItems,
        totalItems,
        isEmpty
    } = useCart()

    if (isEmpty) {
        return (
            <>
                <div className="empty-cart">
                    <h1 align="center">Your cart is empty....</h1>
                    <img src={emptyimg} alt="image" />
                </div>
                <div className="empty-text">
                    <h3><Link to="/">click here</Link> to add items in cart</h3>
                </div>
            </>
        )
    }
    return (
        <>
            <h1>Shopping Cart</h1>
            <h2>Total uniqueitems: {totalUniqueItems} </h2>
            {
                items.map((data) => {
                    return (
                        <>
                            <div className="cart-main" key={data.id}>
                                <div className="cart-img">
                                    <img src={data.img} alt="img" />
                                </div>
                                <div className="cart-text">
                                    <h3>{data.text}</h3>
                                    <h3>{data.name}</h3>
                                    <h3>${data.price}</h3>
                                    <div className="cart-quantity">
                                        <button onClick={() => { updateItemQuantity(data.id, data.quantity + 1) }}>+</button>
                                        <span>{data.quantity}</span>
                                        <button onClick={() => { updateItemQuantity(data.id, data.quantity - 1) }}>-</button>
                                    </div>
                                    <button onClick={() => { removeItem(data.id) }}>Delete</button>
                                </div>
                            </div>
                        </>
                    )
                })
            }
            <h1 align="center">Total Items: {totalItems} & Total Amount: ${cartTotal}</h1>
            <h2 align="center"><Link to="/checkout">Check out</Link></h2>
        </>
    )
}
export { Cart }