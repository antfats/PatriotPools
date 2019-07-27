import React, { Component } from "react";
import Nav from "../components/navBar/index";
// import Jumbotron from "../components/jumbotron/index";
import bigImg from "../images/nicePool.jpg"

class Home extends Component {

    render() {
        return (

            <div>

                <div className="ui centered grid">
                    <div className="sixteen wide column center-align">
                    < Nav />

                        <img className="ui fluid image" src={bigImg} alt=":)" />                    </div>
                </div>
            </div>
        )
    }
}
export default Home;

