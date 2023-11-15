import React from "react";

function Checkout() {
    return (
        <>
            <div className="Checkout-main">
                <form>
                    <label>Name: </label> <br /> 
                    <input type="text" placeholder="Your Name" /> <br />
                    <label>Mobile no. </label> <br />
                    <input type="number" placeholder="Mobile number" /><br />
                    <label> Address: </label><br />
                    <input type="text" placeholder="Your Address" /> <br />
                    <label>Payment:</label>
                    <select>
                       <option>--select--</option>
                       <option>--Debit card--</option>
                       <option>--Credit card--</option>
                       <option>--UPI--</option>
                       <option>--Cash on delivery--</option>
                    </select>
                </form>
            </div>
        </>
    )
}
export { Checkout }