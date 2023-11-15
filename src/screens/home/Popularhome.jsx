import { Link } from "react-router-dom";
import { productsdata } from "../../Data";
import { useCart } from "react-use-cart";
function Popularhome() {
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
                    productsdata.map((items) => {
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