import React, { Component } from "react";
import "./style.css"

class Nav extends Component {
    render() {
        return (
            <div className="ui inverted segment navBar">
                <div className="ui inverted secondary menu">
                    <div className="right item">
                        <a className="active item" href="/">
                            Home
      </a>
                        <a className="item" href="/">
                            Messages
      </a>
                        <a className="item" href="/">
                            Friends
      </a>
                    </div>
                </div>
            </div>
        
        );
    }
}
export default Nav;
