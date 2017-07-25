import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {Nav, NavItem, Collapse} from "react-bootstrap";

import * as UiActions from "../Actions/UiActions";

class LeftMenu extends Component {

  static propTypes = {
    departments: PropTypes.array.isRequired,
    employees: PropTypes.array.isRequired,
    departmentsOpen: PropTypes.bool.isRequired,
    employeesOpen: PropTypes.bool.isRequired,
    editObject: PropTypes.object,

    departmentsOpenToggle: PropTypes.func.isRequired,
    employeesOpenToggle: PropTypes.func.isRequired,
    departmentsEdit: PropTypes.func.isRequired,
    employeesEdit: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let {departments,employees,departmentsOpen, employeesOpen,editObject,departmentsOpenToggle,employeesOpenToggle,departmentsEdit,employeesEdit} = this.props;
    return (
      <div className="navbar sidebar">
        <Nav>
        <NavItem onClick={departmentsOpenToggle}>departments</NavItem>
        <Collapse in={departmentsOpen}>
          <Nav className="nav-second-level">
        {
          departments.map((item)=>{
            return <NavItem key={item.id} active={item===editObject} onClick={()=>{departmentsEdit(item);}}>{item.name}</NavItem>;
          })
        }
        </Nav>
      </Collapse>
      </Nav>
      <Nav>
      <NavItem onClick={employeesOpenToggle}>employees</NavItem>
      <Collapse in={employeesOpen}>
      <Nav className="nav-second-level">
        {
          employees.map((item)=>{
            return <NavItem key={item.id} active={item===editObject} onClick={()=>{employeesEdit(item);}}>{`${item.firstName} ${item.lastName}`}</NavItem>;
          })
        }
      </Nav>
    </Collapse>
    </Nav>
    </div>
    );
  }

}

const mapStateToProps = (state) => ({
  departments: state.app.departments,
  departmentsOpen: state.ui.departmentsOpen,
  employees: state.app.employees,
  employeesOpen: state.ui.employeesOpen,
  editObject: state.ui.editObject.object,
});

const mapDispatchToProps = (dispatch) => ({
  employeesOpenToggle: () => {
    dispatch(UiActions.employees.openToggle());
  },
  departmentsOpenToggle: () => {
    dispatch(UiActions.departments.openToggle());
  },
  departmentsEdit: (department) => {
    dispatch(UiActions.departments.edit(department));
  },
  employeesEdit: (employees) => {
    dispatch(UiActions.employees.edit(employees));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu);
