import React, { Component } from "react";
import "./style.css";

class IntroButton extends Component {
    render() {
        return (
            <div>
                <div className="ui text container introSection">
                    <h1 className="ui inverted header">
                        Patriot Pools
                    </h1>
                    <h2>Keeping Tucsons pools clean since 2016</h2>
                    {/* <button class="big ui inverted blue button">Learn More</button> */}
                    <button className="big ui blue button">Get A Quote</button>

                </div>
            </div>
        )
    }
}
export default IntroButton;
