import React from "react";
import db1 from "../../images/dealimage1.png";
import db2 from "../../images/dealimage2.png";
import db3 from "../../images/dealimage3.png";
import db4 from "../../images/dealimage4.png";

function Deal() {
    const dealbanner = [
        {
            bgimg: `${db1}`
        },
        {
            bgimg: `${db2}`
        },
        {
            bgimg: `${db3}`
        },
        {
            bgimg: `${db4}`
        }
    ]

    const dealdata = [
        {
            text: "seed of change organic ,quinao brown",
            by: "Nest Food",
            price: "$50",
        },
        {
            text: "seed of change organic ,quinao brown",
            by: "Nest Food",
            price: "$50",
        },
        {
            text: "seed of change organic ,quinao brown",
            by: "Nest Food",
            price: "$50",
        },
        {
            text: "seed of change organic ,quinao brown",
            by: "Nest Food",
            price: "$50",
        }
    ]
    const listdata = [
        {
            data: "1060 Days",
        },
        {
            data: "5 months",

        },
        {
            data: "20 year",
        },
        {
            data: " 34 week",
        }
    ]

    return (
        <>
            <h1 className="deal">Deal of the day</h1>

            <div className="bestdeal-main">
                {
                    dealbanner.map((item) => {
                        return (
                            <>
                                <div className="topdeal-img">
                                    <img src={item.bgimg} />
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <div className="deal-text-list">
                
                    <ul className="dlist">
                        {
                            listdata.map((item) => {
                                return (
                                    <>
                                        <li>{item.data}</li>
                                    </>
                                )
                            })
                        }

                    </ul>
                
                
                    <ul className="dlist">
                        {
                            listdata.map((item) => {
                                return (
                                    <>
                                        <li>{item.data}</li>
                                    </>
                                )
                            })
                        }

                    </ul>
                
                <div>
                    <ul className="dlist">
                        {
                            listdata.map((item) => {
                                return (
                                    <>
                                        <li>{item.data}</li>
                                    </>
                                )
                            })
                        }

                    </ul>
                </div>

                <ul className="dlist">
                    {
                        listdata.map((item) => {
                            return (
                                <>
                                    <li>{item.data}</li>
                                </>
                            )
                        })
                    }

                </ul>

            </div>
            <div className="deal-text">
                {
                    dealdata.map((items) => {
                        return (
                            <>
                                <div>
                                    <h4>{items.text}</h4>
                                    <h5>By {items.by}</h5>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <div>
            </div>
        </>
    )
}
export { Deal }