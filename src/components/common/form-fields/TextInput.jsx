"use client";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

const TextInput = (props) => {
  const { label, error, className = "mb-3", ...rest } = props;

  return (
    <FormGroup className={className} controlId={rest.name}>
      <FormLabel>{label}</FormLabel>
      <FormControl isInvalid={!!error} size="lg" {...rest} />
      <FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
    </FormGroup>
  );
};

export default TextInput;
