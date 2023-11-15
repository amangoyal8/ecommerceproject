import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Sliderimg } from "../../otherdata/Sliderimg";
import slimg1 from "../../images/corousel1.webp";
import slimg2 from "../../images/corousel2.webp";
import slimg3 from "../../images/corousel3.webp";
function Homedatafirst() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <Sliderimg img={slimg1}/>
                    <Carousel.Caption>
                        <div className="slider-text">
                        <h1>Fresh vegetables</h1>
                        <h1>Big discount</h1>
                        <h3>Save upto 50% off on your first order</h3>
                        </div>
                    </Carousel.Caption> 
                </Carousel.Item>
                <Carousel.Item>
                <Sliderimg img={slimg2}/>
                    <Carousel.Caption>
                    <div className="slider-text">
                        <h1>Fresh vegetables</h1>
                        <h1>Big discount</h1>
                        <h3>Save upto 50% off on your first order</h3>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <Sliderimg img={slimg3}/>
                    <Carousel.Caption>
                    <div className="slider-text">
                        <h1>Fresh vegetables</h1>
                        <h1>Big discount</h1>
                        <h3>Save upto 50% off on your first order</h3>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
export { Homedatafirst }