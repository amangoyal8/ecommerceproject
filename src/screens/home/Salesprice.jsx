import React, { useState } from "react";
import { toast } from "react-toastify";

function Sales() {
    const [salesprice, setsalesprice] = useState(50)
    const [salesquantity, setsalesquantity] = useState(1)
    const increase = () => {
        if (salesquantity === 10 && salesprice === 500) {
            toast.error("you reached the maximum limit....")
            return setsalesprice(500)
        }
        setsalesquantity(salesquantity + 1)
        setsalesprice(salesprice + 50)
    }
    const decrease = () => {
        if (salesquantity <= 1 && salesprice <= 50) {
            toast.error("you reached the minimum limit....")
            return setsalesprice(50)
        }
        setsalesquantity(salesquantity - 1)
        setsalesprice(salesprice - 50)
    }
    return (
        <>
            <div className="salesprice-btn">
                <h3>${salesprice}</h3>
                <button onClick={increase}>+</button>
                <span>{salesquantity}</span>
                <button onClick={decrease}>-</button>
            </div>
        </>
    )
}
export { Sales }