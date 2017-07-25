import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as UiActions from "../Actions/UiActions";

import EditDepartment from "./EditDepartment";
import EditEmployees from "./EditEmployees";

class EditContent extends Component {

  static propTypes = {
    type: PropTypes.string,
    object: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    let {type}=this.props;
    switch (type) {
    case UiActions.editType.department:
      return <EditDepartment/>;
    case UiActions.editType.employees:
      return <div><EditEmployees/></div>;
    default:
      return <div>Select object for edit</div>;

    }
  }

}

const mapStateToProps = (state) => ({
  type: state.ui.editObject.type,
  object: state.ui.editObject.object,
});


export default connect(mapStateToProps)(EditContent);
