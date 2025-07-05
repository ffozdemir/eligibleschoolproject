"use client";
import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { useFormStatus } from "react-dom";

const SubmitButton = ({
  title,
  icon = "send",
  className = "w-100",
  ...rest
}) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="lg"
      className={`d-flex align-items-center justify-content-center ${className}`}
      disabled={pending}
      variant="secondary"
      {...rest}
    >
      {pending ? (
        <Spinner size="sm" animation="border" />
      ) : (
        <>
          {icon && <i className={`pi pi-${icon} me-2`}></i>}
          {title}
        </>
      )}
    </Button>
  );
};

export default SubmitButton;
