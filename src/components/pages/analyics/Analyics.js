import React, { Component } from "react";
import Header from "../../header/Header";
import NavigationLeft from "../../nav/NavigationLeft";


class Analyics extends Component {
  state = {};


  render() {
    return (
      <div className="container">
        <NavigationLeft />
        <div className="content">
            {localStorage.setItem("page", "Analytics")}
          <Header />
          <h2>Analyics</h2>
        </div>
      </div>
    );
  }
}

export default Analyics;

