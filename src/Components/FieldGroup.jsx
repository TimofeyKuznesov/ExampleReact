import React from "react";
import PropTypes from "prop-types";
import {FormGroup,ControlLabel,FormControl} from "react-bootstrap";

class FieldGroup extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired
  };
  render () {
    let { id, label, ...props } = this.props;
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
      </FormGroup>
    );
  }
}

export default FieldGroup;
