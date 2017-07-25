import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {Panel,Form,Button} from "react-bootstrap";
import FieldGroup from "./FieldGroup";

import * as AppActions from "../Actions/AppActions";

class EditEmployees extends Component {

  static propTypes = {
    object: PropTypes.object.isRequired,
    departments: PropTypes.array.isRequired,
    employeeSave: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      object : props.object,
    };
    this.onChange=this.onChange.bind(this);
  }
  componentWillReceiveProps(props){
    this.setState({object:props.object});
  }

  onChange(event) {
    let object = Object.assign({},this.state.object);
    object[event.target.name]=event.target.value;
    this.setState({
      object: object,
    });
  }
  render() {
    let header=<div>Edit employee<Button
      key="save"
      className="pull-right"
      onClick={()=>{this.props.employeeSave(this.state.object);}}
      disabled={this.props.object===this.state.object}>
        Save
      </Button>
      </div>;
    return (
      <Panel header={header}>
        <Form>
        <FieldGroup componentClass="select" label="Department" name="departmentId" value={this.state.object.departmentId||""} onChange={this.onChange}>
          <option></option>
          {
            this.props.departments.map((item)=>{
              return <option key={item.id} value={item.id}>{item.name}</option>;
            })
          }
        </FieldGroup>
        <FieldGroup label="FirstName" name="firstName" value={this.state.object.firstName||""} onChange={this.onChange}/>
        <FieldGroup label="LastName" name="lastName" value={this.state.object.lastName||""} onChange={this.onChange}/>
        </Form>
        </Panel>
    );
  }

}

const mapStateToProps = (state) => ({
  departments: state.app.departments,
  type: state.ui.editObject.type,
  object: state.ui.editObject.object,
});

const mapDispatchToProps = (dispatch) => ({
  employeeSave: (employee) => {
    dispatch(AppActions.employee.save(employee));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditEmployees);
