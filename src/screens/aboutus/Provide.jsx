import React from "react";
import bestpriceimg from "../../images/bestprice.svg";
import freedeliveryimg from "../../images/delivery.svg";
import dailydealimg from "../../images/dailydeal.svg";
import wideimg from "../../images/wide.svg";
import satisfactionimg from "../../images/satisfaction.svg";
import returnimg from "../../images/returns.svg";
import { Link } from "react-router-dom";

function Provide() {
    const providedata = [
        {
            id: 1,
            image: `${bestpriceimg}`,
            heading: "Best Price & Offer"
        },
        {
            id: 2,
            image: `${wideimg}`,
            heading: "Wide Assortment"
        },
        {
            id: 3,
            image: `${freedeliveryimg}`,
            heading: "Free Delivery"
        },
        {
            id: 4,
            image: `${returnimg}`,
            heading: "Easy Returns"
        },
        {
            id: 5,
            image: `${satisfactionimg}`,
            heading: "100% Satisfaction"
        },
        {
            id: 6,
            image: `${dailydealimg}`,
            heading: "Great Daily Deals"
        }
    ]

    return (
        <>
            <div className="provide-h">
                <h1>What we provide</h1>
            </div>
            <div className="provide-main">
                {
                    providedata.map((data) => {
                        return (
                            <>
                                <div className="providebx-in" key={data.id}>
                                    <img src={data.image} alt="image" />
                                    <h1>{data.heading}</h1>
                                    <p className="provide-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus repellat molestias, libero ut unde voluptas sapiente tempore tenetur, asperiores facere placeat fuga! Facere perspiciatis soluta dignissimos adipisci vero veniam?</p>
                                    <Link>Read more</Link>
                                </div>
                            </>
                        )
                    })
                }
            </div>

        </>
    )
}
export { Provide }