import React from "react";
import img from "../../images/banner.png";
import pd1 from "../../images/product-1.jpg";
import pd2 from "../../images/product-2.jpg";
import pd3 from "../../images/product-3.jpg";
import pd4 from "../../images/product-4.jpg";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
function Bestsales() {
    const { addItem, inCart } = useCart()
    const saleitems = [
        {
            img: `${pd1}`,
            text: "snack",
            name: "bandy bandy",
            price: 90,
            id: 1
        },
        {
            img: `${pd2}`,
            text: "snack",
            name: "french fries",
            price: 50,
            id: 2
        },
        {
            img: `${pd3}`,
            text: "snack",
            name: "sweet potato",
            price: 33,
            id: 3
        },
        {
            img: `${pd4}`,
            text: "snack",
            name: "penuts butter",
            price: 66,
            id: 4
        }
    ]

    return (
        <>
            <div className="sales-h">
                <h1 className="sales-heading">Daily Best Sales</h1>
            </div>
            <div className="sales-main">
                <div className="sales-poster">
                    <img src={img} />
                </div>

                <div className="sales-products">
                    {
                        saleitems.map((items) => {
                            return (
                                <>
                                    <div key={items.id} className="salesproducts">
                                        <img src={items.img} />
                                        <div className="products-text">
                                            <h4>{items.text}</h4>
                                            <h4>{items.name}</h4>
                                            <h3>${items.price}</h3>
                                        </div>

                                        <div className="cart-button-sales">
                                            {(inCart(items.id) ? <button><Link to="/cart"> Go to Cart</Link></button> : <button onClick={() => { addItem(items) }}>Add to cart</button>)}
                                        </div>
                                        <div className="itemposition">
                                            <h5>New</h5>
                                        </div>
                                    </div >
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export { Bestsales }