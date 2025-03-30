import React from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../../images/logo.svg";
import { productsdata } from "../../Data";
import { useCart } from "react-use-cart";
function Productdetails() {
    const { productId } = useParams()
    const thisproduct = productsdata.find(prod => prod.id == productId)
    const { addItem, inCart } = useCart()
    return (
        <>

            <div className="details-header-main">
                <div className="details-header-left">
                    <img src={logo} alt="logoimage" />
                </div>
                <div className="details-header-right">
                    <Link to="/"> <button> Click here for more shopping..</button> </Link>
                </div>
            </div>
            <div className="details-main">
                <div className="details-image">
                    <img src={thisproduct.img} alt="image" />
                </div>
                <div className="details-text">
                    <span>{thisproduct.text}</span>
                    <h1>{thisproduct.name}</h1>
                    <p>Our product mostly preferred for health related problems and Healthy product are very most important for our health.So this product is very healthy for us</p>
                    <label for="weight">Choose your weight quantity: </label>
                    <select>
                        <option>--choose--</option>
                        <option>--250g--</option>
                        <option>--500g--</option>
                        <option>--1kg--</option>
                        <option>--2kg--</option>
                        <option>--5kg--</option>
                    </select>
                    <br />
                    <br />
                    <span>Choose any color:</span>
                    <div className="color-option">
                        <button className="circle red"> red </button>
                        <button className=" circle blue"> blue </button>
                        <button className=" circle black"> black </button>
                    </div>
                    <br />
                    <br />
                    <span>Product Configuration:</span>
                    <div className="configuration">
                        <button>Fresh</button>
                        <button>Cold</button>
                        <button>Long-coiled</button>
                    </div>
                    <br />
                    <Link>How to configurate your product?</Link>
                    <div className="detailed-price">
                        <span>${thisproduct.price}</span>
                        {(inCart(thisproduct.id) ? <button><Link to="/cart"> Go to Cart</Link></button> : <button onClick={() => { addItem(thisproduct) }}>Add to cart</button>)}
                    </div>
                </div>
            </div>
        </>
    )
}
export { Productdetails }