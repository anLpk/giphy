import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../assets/stylesheets/application.scss";

// const Hello = (props) => {
//   return <div>Hello, {props.name}</div>;
// };

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
  }

  handleClick = () => {
    // TODO: change the state
    // console.log("clicked");
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <div
        className={this.state.clicked ? "clicked" : null}
        onClick={this.handleClick}
      >
        Hello {this.props.name}
      </div>
    );
  }
}
const root = document.getElementById("root");
// console.log(root);
if (root) {
  ReactDOM.render(<Hello name="Anil" />, root);
}
