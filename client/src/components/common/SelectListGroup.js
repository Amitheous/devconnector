import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { FormGroup, Input, FormFeedback } from "reactstrap";

const SelectListGroup = ({ name, value, error, info, onChange, options }) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <FormGroup>
      <Input
        type="select"
        className={classnames("form-control form-control-lg")}
        name={name}
        value={value}
        onChange={onChange}
        invalid={error}
      >
        {selectOptions}
      </Input>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <FormFeedback>{error}</FormFeedback>}
    </FormGroup>
  );
};

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default SelectListGroup;
