import React from "react";
import "./style.css";
import ImgSeven from "../../images/imgSeven.jpg";
import imgFive from "../../images/imgFive.jpg";
import imgEleven from "../../images/imgEleven.jpg";
import imgThree from "../../images/imgThree.jpg";



function Gallary() {
    return (
        <div className="gallary ui ten column grid center aligned">
            <div className="four column row center aligned" id="gallaryID">

                <div className="column">
                    <img className="ui medium rounded image" id="imgFive" src={imgFive} alt=":)" />

                </div>
                <div className="column">
                    <img className="ui medium rounded image" id="imgSeven" src={ImgSeven} alt=":)" />
                </div>
                <div className="column">

                    <img className="ui medium rounded image" id="imgThree" src={imgThree} alt=":)" />
                </div>
                <div className="column">
                    <img className="ui medium rounded image" id="imgEleven" src={imgEleven} alt=":)" />

                </div>
            </div>
        </div>
    )
}
export default Gallary;
