import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {Panel,Form,FormGroup,ControlLabel,FormControl,Button} from "react-bootstrap";

import * as AppActions from "../Actions/AppActions";

class EditDepartment extends Component {

  static propTypes = {
    object: PropTypes.object.isRequired,
    departmentSave: PropTypes.func
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
    let object = Object.assign({},this.state.object,{name: event.target.value});
    this.setState({
      object: object,
    });
  }
  render() {
    let header=<div>Edit department<Button
      key="save" 
      className="pull-right"
      onClick={()=>{this.props.departmentSave(this.state.object);}}
      disabled={this.props.object===this.state.object}>Save</Button></div>;
    return (
      <Panel header={header}>
        <Form>
          <FormGroup controlId={"department-"+this.state.object}>
            <ControlLabel>Department name</ControlLabel>
              <FormControl name="name" value={this.state.object.name||""} onChange={this.onChange} />
              </FormGroup>
            </Form>
      </Panel>
    );
  }

}

const mapStateToProps = (state) => ({
  type: state.ui.editObject.type,
  object: state.ui.editObject.object,
});

const mapDispatchToProps = (dispatch) => ({
  departmentSave: (department) => {
    dispatch(AppActions.department.save(department));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDepartment);
