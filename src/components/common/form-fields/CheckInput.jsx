"use client";
import { FormCheck, FormControl, FormGroup } from "react-bootstrap";

const CheckInput = (props) => {
  const { error, className = "mb-3", ...rest } = props;

  return (
    <FormGroup className={className} controlId={rest.name}>
      <FormCheck isInvalid={!!error} {...rest} />
      <FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
    </FormGroup>
  );
};

export default CheckInput;
