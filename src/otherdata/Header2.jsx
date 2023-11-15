import React from "react";
import limg from "../images/logo.svg";
import { Headerdata } from "../Data"
import { Link } from "react-router-dom";
function Header2() {
    return (
        <>
            <div className="main-h">
                <div className="head-up">
                    <div className="logo">
                        <img src={limg} alt="img" />
                        <div className="search">
                            <form className="form">
                                <h4 className="cat">All categories</h4>
                                <input id="col-1" type="text" placeholder="search for items..." />
                                <button>search</button>
                            </form>
                        </div>
                    </div>

                    <div className="items">
                        <div className="iit">
                            <Link to="#">
                                <i className="fa-solid fa-recycle"></i>
                                Compare</Link>
                        </div>
                        <div className="iit">
                            <Link to="#">
                                <i className="fa-solid fa-heart"></i>
                                Wishlist</Link>
                        </div>
                        <div className="iit">
                            <Link to="/cart">
                                <i className="fa-sharp fa-solid fa-cart-plus"></i>
                                Cart
                            </Link>
                        </div>
                        {/* <div className="iit">
                            <Link to="#">
                                <i className="fa-solid fa-user"></i>
                                Account</Link>
                        </div> */}
                    </div>
                </div>
                <div className="head-dw">
                    {/* <div>
                        <button className="categoriesbtn">
                            <i className="fa-solid fa-table-cells"></i>
                            .   Browse all categories</button>

                    </div> */}
                    <div className="menu">
                        <ul className="menu-m" >
                            {
                                Headerdata.map((menuitems) => {
                                    return (
                                        <>
                                            <li className="menu-li" key={menuitems.id}> <Link id="link" to={menuitems.tlink}>{menuitems.title}</Link> </li>
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="contact">
                        <h4>
                            <i id="hd" className="fa-solid fa-headphones"></i>
                            1988-899
                        </h4>
                        <h5>24/7 customer support</h5>
                    </div>
                </div>

            </div>
        </>
    )
}
export { Header2 }