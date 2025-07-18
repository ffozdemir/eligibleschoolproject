"use client";
import { createLessonAction } from "@/actions/lesson-action";
import { createTermAction } from "@/actions/term-actions";
import {
  FormContainer,
  SubmitButton,
  TextInput,
} from "@/components/common/form-fields";
import BackButton from "@/components/common/form-fields/BackButton";
import CheckInput from "@/components/common/form-fields/CheckInput";

import { initialState } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";
import React, { useEffect, useActionState } from "react";
import { ButtonGroup, Form } from "react-bootstrap";

const LessonCreateForm = () => {
  const [state, formAction] = useActionState(createLessonAction, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state?.message) {
      swAlert(state.message, state.ok ? "success" : "error");
      if (state.ok) {
        router.push("/dashboard/lesson");
      }
    }
  }, [state]);

  return (
    <FormContainer>
      <Form action={formAction}>
        <TextInput
          label="Lesson"
          name="lessonName"
          error={state?.errors?.lessonName}
          defaultValue={state?.data?.lessonName ?? ""}
        />

        <TextInput
          label="Credit"
          name="creditScore"
          error={state?.errors?.creditScore}
          defaultValue={state?.data?.creditScore ?? ""}
          type="number"
        />

        <CheckInput
          label="Compulsory"
          name="compulsory"
          type="checkbox"
          defaultValue={state?.data?.compulsory ?? "true"}
        />

        <ButtonGroup className="w-100">
          <BackButton />
          <SubmitButton title="Create" />
        </ButtonGroup>
      </Form>
    </FormContainer>
  );
};

export default LessonCreateForm;
