import React from "react";
import limg from "../images/logo.svg";
import aimg from "../images/app-store.jpg";
import gimg from "../images/google-play.jpg";
import pimg from "../images/payment-method.png";
import fimg from "../images/corousel2.webp";
import { Link } from "react-router-dom";
import { footeradata, footercdata, footercodata, footerpdata } from "../Data";
function Footer() {
    return ( 
        <>
            <div className="ftrimg1">
                <img src={fimg} alt="image" />
                <div className="img-text">
                    <h1>Stay home & get your daily needs from our shop</h1>
                    <h5>Start You'r Daily Shopping with Nest Mart</h5>
                    <input type="text"placeholder="Enter your Email address....."/>
                    <button>Submit</button>
                </div>
            </div>
            <div className="main-f">
                <div className="flogo">
                    <img src={limg} alt="img" />
                    <h3>Awesome grocery store and website template</h3>
                    <a href="#">
                        <i className="fa-solid fa-location-dot"></i>
                        Address </a>
                    <p>5171 W Campbell Ave undefined Kent, United States</p>
                    <a href="#">
                        <i className="fa-solid fa-phone"></i>
                        Call Us</a>
                    <p>(+91) - 540-025-124553</p>
                    <a href="#">
                        <i className="fa-solid fa-envelope"></i>
                        Email</a>
                    <p>dummysale@gmial.com</p>
                    <a href="#">
                        <i className="fa-solid fa-timer"></i>
                        Hours</a>
                    <p>10:00AM-08:00PM, Mon-Sat</p>
                </div>
                <div className="fc">
                    <h1>Company</h1>
                    {
                        footercdata.map((items) => {
                            return (
                                <>
                                    <li key={items.id}> <Link to={items.nlink}>{items.name}</Link> </li>
                                </>
                            )
                        })
                    }
                </div>
                <div className="fc">
                    <h1>Account</h1>
                    {
                        footeradata.map((items) => {
                            return (
                                <>
                                    <li key={items.id}>  <Link to={items.nlink}>{items.name}</Link> </li>
                                </>
                            )
                        })
                    }
                </div>
                <div className="fc">
                    <h1>Corporate</h1>
                    {
                        footercodata.map((items) => {
                            return (
                                <>
                                    <li key={items.id}>  <Link to={items.nlink}>{items.name}</Link> </li>
                                </>
                            )
                        })
                    }
                </div>
                <div className="fc">
                    <h1>Popular</h1>
                    {
                        footerpdata.map((items) => {
                            return (
                                <>
                                    <li key={items.id}>  <Link to={items.nlink}>{items.name}</Link> </li>
                                </>
                            )
                        })
                    }
                </div>
                <div className="fpayment">
                    <h2>Install app</h2>
                    <div className="pimg">
                        <img src={aimg} alt="img" />
                        <img src={gimg} alt="img" />
                    </div>
                    <h2>Secrure Payment Gateway</h2>
                    <img src={pimg} alt="img" />
                </div>
            </div>
            <div className="f-last">
                <div className="rights">
                    <h5>© 2022, Nest - HTML Ecommerce Template</h5>
                    <h5>Copyright All right reserved By Aman Agarwal</h5>
                    <h5>Designed and Developed By Aman Agarwal</h5>
                </div>
                <div className="number">
                    <div>
                        <h1>
                            <i className="fa-solid fa-phone"></i>
                            1800-666</h1>
                        <h4>working 8:00-22:00</h4>
                    </div>
                    <div>
                        <h1>
                            <i className="fa-solid fa-phone"></i>
                            1800-888</h1>
                        <h4>Customer support 24/7</h4>

                    </div>

                </div>
                <div className="follow">


                    <h1>FOLLOW US</h1>
                    <h5>upto 15% discount on your first order</h5>
                </div>
            </div>
        </>
    )
}
export { Footer }