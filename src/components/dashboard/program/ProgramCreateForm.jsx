"use client";
import { createProgramAction } from "@/actions/program-actions";
import {
  DateInput,
  FormContainer,
  SelectInput,
  SubmitButton,
} from "@/components/common/form-fields";
import BackButton from "@/components/common/form-fields/BackButton";

import { initialState } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";
import React, { useEffect, useActionState } from "react";
import { ButtonGroup, Form } from "react-bootstrap";

const ProgramCreateForm = ({ terms }) => {
  const [state, formAction, isLoading] = useActionState(
    createProgramAction,
    initialState
  );
  const router = useRouter();

  useEffect(() => {
    if (state?.message) {
      swAlert(state.message, state.ok ? "success" : "error");
      if (state.ok) {
        router.push("/dashboard/program");
      }
    }
  }, [state]);

  return (
    <FormContainer>
      <Form action={formAction}>
        <SelectInput
          name="educationTermId"
          label="Education Term"
          error={state?.errors?.educationTermId}
          options={terms}
          optionLabel="label"
          optionValue="value"
          defaultValue={state?.data?.educationTermId ?? ""}
          key={`educationTermId-${isLoading}`}
        />

        <DateInput
          label="Start Time"
          name="startTime"
          error={state?.errors?.startTime}
          timeOnly
          defaultValue={state?.data?.startTime ?? ""}
          key={`startTime-${isLoading}`}
        />
        <DateInput
          label="End Time"
          name="stopTime"
          error={state?.errors?.stopTime}
          timeOnly
          defaultValue={state?.data?.stopTime ?? ""}
          key={`stopTime-${isLoading}`}
        />

        <ButtonGroup className="w-100">
          <BackButton />
          <SubmitButton title="Create" />
        </ButtonGroup>
      </Form>
    </FormContainer>
  );
};

export default ProgramCreateForm;
