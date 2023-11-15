import React from "react";
import { Header } from "../../otherdata/Header";
import { Homedatafirst } from "./Homedatafirst";
import { Homecategory } from "./Homecategory";
import { Popularhome } from "./Popularhome";
import { Footer } from "../../otherdata/Footer";
import { Bestsales } from "./Bestsales";
import { Deal } from "./Deal";


function Home()
{
    return(
        <>
        <Header />
        <Homedatafirst/>
        <Homecategory/>
        <Popularhome/>
        <Bestsales/>
        <Deal/>
        <Footer/>
        </>
    )
}
export {Home}