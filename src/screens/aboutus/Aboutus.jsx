import React from "react";
import { Header2 } from "../../otherdata/Header2";
import { Wcnest } from "./Wcnest";
import { Provide } from "./Provide";
import { Ourperformance } from "./Ourperformance";
import { Footer } from "../../otherdata/Footer";
function About()
{
    return(
        <>
        <Header2/>
        <Wcnest/>
        <Provide/>
        <Ourperformance/>
        <Footer/>
        </>
    )
}
export {About}