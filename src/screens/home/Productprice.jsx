import React, { useState } from "react";
import { toast } from "react-toastify";

function Productprice() {

    const [price, setprice] = useState(50)
    const [quantity, setquantity] = useState(1)
    const increase = () => {
        if (quantity === 10 && price === 500) {
            toast.error("you reached the maximum limit....")
            return setprice(500)
        }
        setquantity(quantity + 1)
        setprice(price + 50)
    }
    const decrease = () => {
        if (quantity <= 1 && price <= 50) {
            toast.error("you reached the minimum limit....")
            return setprice(50)
        }
        setquantity(quantity - 1)
        setprice(price - 50)
    }
    return (
        <>

            <div className="product-price-main">
                <div className="product-price">
                    <h3>${price}</h3>
                </div>
                <div className="productprice-btn">
                        <button onClick={increase}>+</button>
                        <span>{quantity}</span>
                        <button onClick={decrease}>-</button>
                    </div>
                <div className="cart-button">
                    <button>Add to cart</button>
                </div>
            </div>
        </>
    )
}
export { Productprice }