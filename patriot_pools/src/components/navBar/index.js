import React, { Component } from "react";


class Nav extends Component {
    render() {
        return (
            <div class="ui inverted segment">
                <div class="ui inverted secondary menu">
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
            // <div className="ui grid">
            //   <div className="six column row">
            //     <div className="left floated column">
            //       <button class="ui inverted primary button">Patriot Pools</button>
            //     </div>
            //     <div className="right floated column">
            //       <button class="ui inverted blue button">Pricing</button>
            //       <button class="ui inverted red button">Gallary</button>
            //       <button class="ui inverted grey button">Grey</button>
            //     </div>
            //   </div>

            // </div>

        );
    }
}
export default Nav;
