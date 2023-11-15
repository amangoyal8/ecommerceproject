import React from "react";
import girlimg from "../../images/aboutusgirl.png";
import nimg1 from "../../images/nestimg1.png";
import nimg2 from "../../images/nestimg2.png";
function Wcnest() {
    return (
        <>

            <div className="about-main">
                <div className="girlimg">
                    <img src={girlimg} />
                </div>
                <div className="nest-text">
                    <h1>Welcome to nest</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200</p>
                    <div className="nestimages">
                        <img src={nimg1} />
                        <img src={nimg2} />
                        <img src={nimg1} />
                    </div>
                </div>
            </div>
        </>
    )
}
export { Wcnest }