import { Link } from "react-router-dom";
import { productsdata } from "../../Data";
import { useCart } from "react-use-cart";
import { useEffect, useState } from "react";
import React from "react";
function Popularhome(props) {
    const popularlist = [
        {
            name: "All",
            nlink: "/#"
        },
        {
            name: "milk & dairy",
            nlink: "/#"
        },
        {
            name: "coffee & tea",
            nlink: "/#"
        },
        {
            name: "pet food",
            nlink: "/#"
        },
        {
            name: "Meat",
            nlink: "/#"
        },
        {
            name: "Vegetables",
            nlink: "/#"
        },
        {
            name: "Fruits",
            nlink: "/#"
        }
    ]
    const { addItem, inCart } = useCart()
    const [filteritem, setfilteritem] = useState([...productsdata])
    const chnageitem = (e) => {
        const getvalue = e;
        const updatevalue = filteritem.filter((updateitems) => updateitems.name.toLowerCase().startsWith(getvalue))
        if (getvalue) {
            setfilteritem(updatevalue)
        } else {
            setfilteritem(productsdata)
        }
        
    }

    useEffect(() => {
        if (props.inputvalue !== '') {
            chnageitem(props.inputvalue)
        }
        else if (props.inputvalue === 0) {
            setfilteritem(productsdata)
        }
        else {
            setfilteritem(productsdata)
        } 
    },[props.inputvalue])
    return (
        <>
            <div className="popular-main">
                <div className="popular">
                    <h1>popular products</h1>
                </div>
                <div className="popular-list">
                    {
                        popularlist.map((item) => {
                            return (
                                <>
                                    <li key={item.id}><Link to={item.nlink}>{item.name}</Link></li>
                                </>
                            )
                        })
                    }
                </div>
            </div>
            <div className="popular-products">
               
                {
                    filteritem.map((items) => {
                        return (
                            <>

                                <div className="products">
                                    <Link to={`productdetails/${items.id}`}>
                                        <img src={items.img} />
                                    </Link>
                                    <div className="products-text">
                                        <h3>{items.text}</h3>
                                        <h3>{items.name}</h3>
                                    </div>
                                    <div className="cart-button">
                                        <h3>${items.price}</h3>
                                        {(inCart(items.id) ? <button><Link to="/cart"> Go to Cart</Link></button> : <button onClick={() => { addItem(items) }}>Add to cart</button>)}
                                    </div>
                                    <div className="itemposition">
                                        <h5>New</h5>
                                    </div>
                                </div>
                            </>
                        )
                    })

                }
            </div>
        </>
    )
}
export { Popularhome }