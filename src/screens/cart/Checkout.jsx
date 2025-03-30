import React from "react";

function Checkout() {

    const checkvalidate=(e)=>{
        const a = e.target.value;
        if(a!="")
        {
            console.log("success...")
        }
        else{
            console.log("unsuccess...")
        }
    }
    return (
        <>
            <div className="Checkout-main">
                <form>
                    <label>Name: </label> <br /> 
                    <input onChange={checkvalidate} type="text" placeholder="Your Name" /> <br />
                    <label>Mobile no. </label> <br />
                    <input onChange={checkvalidate} type="number" placeholder="Mobile number" /><br />
                    <label> Address: </label><br />
                    <input onChange={checkvalidate} type="text" placeholder="Your Address" /> <br />
                    <label>Payment:</label>
                    <select onChange={checkvalidate}>
                       <option>--select--</option>
                       <option>--Debit card--</option>
                       <option>--Credit card--</option>
                       <option>--UPI--</option>
                       <option>--Cash on delivery--</option>
                    </select>
                </form>
                <button >Submit</button>
            </div>
        </>
    )
}
export { Checkout }