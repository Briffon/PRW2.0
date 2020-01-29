import React, { Component } from "react";
import Header from "../../header/Header";
import NavigationLeft from "../../nav/NavigationLeft";
import SignInModal from "../../modals/SignInModal";

class Sales extends Component {
  state = {

  };

  componentDidMount() {}

  render() {

    return (
      <div className="container">
        <NavigationLeft />
        <div className="content">
          <Header />
          <SignInModal />
        </div>
      </div>
    );
  }
}

export default Sales;

