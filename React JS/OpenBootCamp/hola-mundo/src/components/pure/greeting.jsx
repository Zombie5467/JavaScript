import React, { Component } from "react";
import propsTypes from "prop-types";

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 29,
    };
  }

  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <h2>tu edad es {this.state.age}</h2>
        <div>
          <button onClick={this.menos}> Menos 1</button>
          <button onClick={this.birthday}> Mas 1</button>
        </div>
      </div>
    );
  }

  birthday = () => {
    this.setState((prevState) => ({
      age: prevState.age + 1,
    }));
  };

  menos = () => {
    this.setState((prevState) => ({
      age: prevState.age - 1,
    }));
  };
}

Greeting.propsTypes = {
    name:propsTypes.string,
};

export default Greeting;