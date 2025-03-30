import React, { useState } from "react";
import { Header } from "../../otherdata/Header";
import { Homedatafirst } from "./Homedatafirst";
import { Homecategory } from "./Homecategory";
import { Popularhome } from "./Popularhome";
import { Footer } from "../../otherdata/Footer";
import { Bestsales } from "./Bestsales";
import { Deal } from "./Deal";


function Home()
{
    const [value,setvalue]=useState();
    const getvalue=(dda)=>{
        setvalue(dda)
    }
    return(
        <>
        <Header send={getvalue}/>
        <Homedatafirst/>
        <Homecategory/>
        <Popularhome inputvalue={value}/>
        <Bestsales/>
        <Deal/>
        <Footer/>
        </>
    )
}
export {Home}