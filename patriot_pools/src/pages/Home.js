import React, { Component } from "react";
import Nav from "../components/navBar/index";
import IntroButton from "../components/introButton/index";
import Gallary from "../components/gallary/index";
import "./style.css";
import Header from "../components/h1/index";
import Testimonials from "../components/testimonials/index";
import AboutUs from "../components/aboutUs/index";
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
                        < Header />
                        < Gallary />
                    </div>
                    {/* <div className="sixteen wide column"> */}
                        <div className="ten wide column">
                            < Testimonials />

                            < AboutUs />
                        </div>
                    {/* </div> */}
                </div>
            </div>
        )
    }
}
export default Home;

