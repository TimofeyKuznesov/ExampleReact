import React from "react";
import PropTypes from "prop-types";
import LeftMenu from "./LeftMenu";

class Content extends React.Component {
  static propTypes = {
    children: PropTypes.element
  };
  render () {
    return <div className="App">
      <LeftMenu/>
      <div id="page-wrapper">
      {this.props.children}
      </div>
    </div>;
  }
}

export default  Content;
