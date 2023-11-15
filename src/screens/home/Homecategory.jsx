import React from "react";
import { category, categoryitems } from "../../Data";
import { Link } from "react-router-dom";
import onion from "../../images/onion.jpeg";
import bottleimg from "../../images/on2.jpeg";
import fruitsimg from "../../images/on3.jpeg";
function Homecategory() {
    return (
        <>
            <div className="category-main">
                <div className="featured-category">
                    <h1>Featured Category</h1>
                </div>
                <div className="category-list">
                    <ul>
                        {
                            category.map((items) => {
                                return (
                                    <>
                                        <li key={items.id}> <Link to={items.nlink}>{items.name}</Link> </li>
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="category-items-main">
                {
                    categoryitems.map((item) => {
                        return (
                            <>
                                <div className="category-items" key={item.id}>
                                    <img src={item.catimg} />
                                    <h4>{item.name}</h4>
                                    <h5>{item.items}</h5>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            {/* <div className="category-posters">
                <div className="cat-poster1">
                    <img src={onion} />
                </div>
                <div className="cat-poster2">
                    <img src={bottleimg} />
                </div>
                <div className="cat-poster3">
                    <img src={fruitsimg} />
                </div>
            </div> */}
        </>
    )
}
export { Homecategory }