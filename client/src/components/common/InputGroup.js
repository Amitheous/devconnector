import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { FormGroup, Input, FormFeedback } from "reactstrap";

const InputGroup = ({
  name,
  placeholder,
  value,
  error,
  type,
  icon,
  onChange
}) => {
  return (
    <FormGroup className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" style={{ width: "44px" }}>
          <i className={icon} />
        </span>
      </div>
      <Input
        type={type}
        className={classnames("form-control form-control-lg")}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        invalid={error}
      />
      {error && <FormFeedback>{error}</FormFeedback>}
    </FormGroup>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.string
};

InputGroup.defaultProps = {
  type: "text"
};

export default InputGroup;
