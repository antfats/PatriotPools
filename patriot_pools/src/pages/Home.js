import React, { Component } from "react";
import Nav from "../components/navBar/index";
import IntroButton from "../components/introButton/index";
import Gallary from "../components/gallary/index";
import "./style.css";
// import Jumbotron from "../components/jumbotron/index";

class Home extends Component {

    render() {
        return (

            <div>
                <div className="ui centered grid">
                    <div className="ui inverted vertical masthead center aligned segment" id="introPage">
                        < Nav />
                        <IntroButton />
                    </div>
                    <div className="sixteen wide column" id="gallaryID">
                        < Gallary />
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;

