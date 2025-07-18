"use client";

import { updateStudentAction } from "@/actions/student-action";
import {
  FormContainer,
  TextInput,
  SelectInput,
  DateInput,
  MaskedInput,
  PasswordInput,
  SubmitButton,
  BackButton,
} from "@/components/common/form-fields";

import { appConfig } from "@/helpers/config";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";
import React, { useEffect, useActionState } from "react";
import { ButtonGroup, Form } from "react-bootstrap";

const StudentEditForm = ({ user, teachers }) => {
  const [state, formAction, isLoading] = useActionState(
    updateStudentAction,
    { data: user } // Initialize with user data
  );
  const router = useRouter();

  useEffect(() => {
    if (state?.message) {
      swAlert(state.message, state.ok ? "success" : "error");
      if (state.ok) {
        router.push("/dashboard/student");
      }
    }
  }, [state]);

  return (
    <FormContainer>
      <Form action={formAction}>
        <input type="hidden" name="id" value={user.id} />
        <TextInput
          label="First Name"
          name="name"
          error={state?.errors?.name}
          defaultValue={state?.data?.name ?? ""}
        />
        <TextInput
          label="Last Name"
          name="surname"
          error={state?.errors?.surname}
          defaultValue={state?.data?.surname ?? ""}
        />

        <SelectInput
          name="gender"
          label="Gender"
          error={state?.errors?.gender}
          options={appConfig.genders}
          optionLabel="label"
          optionValue="value"
          defaultValue={state?.data?.gender ?? ""}
          key={`gender-${isLoading}`}
        />

        <DateInput
          label="Date of birth"
          name="birthDay"
          error={state?.errors?.birthDay}
          dateFormat="yy-mm-dd"
          defaultValue={state?.data?.birthDay ?? ""}
          key={`birthDay-${isLoading}`}
        />

        <TextInput
          label="Place of birth"
          name="birthPlace"
          error={state?.errors?.birthPlace}
          defaultValue={state?.data?.birthPlace ?? ""}
        />

        <TextInput
          label="Email"
          name="email"
          error={state?.errors?.email}
          defaultValue={state?.data?.email ?? ""}
        />

        <SelectInput
          name="advisorTeacherId"
          label="Advisor"
          error={state?.errors?.advisorTeacherId}
          options={teachers}
          optionLabel="label"
          optionValue="value"
          defaultValue={state?.data?.advisorTeacherId ?? ""}
          key={`advisorTeacherId-${isLoading}`}
        />

        <MaskedInput
          label="Phone number"
          name="phoneNumber"
          error={state?.errors?.phoneNumber}
          mask="999-999-9999"
          value={state?.data?.phoneNumber ?? ""}
        />

        <MaskedInput
          label="SSN"
          name="ssn"
          error={state?.errors?.ssn}
          mask="999-99-9999"
          value={state?.data?.ssn ?? ""}
        />

        <TextInput
          label="Father Name"
          name="fatherName"
          error={state?.errors?.fatherName}
          defaultValue={state?.data?.fatherName ?? ""}
        />

        <TextInput
          label="Mother Name"
          name="motherName"
          error={state?.errors?.motherName}
          defaultValue={state?.data?.motherName ?? ""}
        />

        <TextInput
          label="Username"
          name="username"
          error={state?.errors?.username}
          defaultValue={state?.data?.username ?? ""}
        />

        <PasswordInput
          label="Password"
          name="password"
          error={state?.errors?.password}
          defaultValue={state?.data?.password ?? ""}
        />

        <PasswordInput
          label="Confirm password"
          name="confirmPassword"
          error={state?.errors?.confirmPassword}
          defaultValue={state?.data?.confirmPassword ?? ""}
        />

        <ButtonGroup className="w-100">
          <BackButton />
          <SubmitButton title="Update" />
        </ButtonGroup>
      </Form>
    </FormContainer>
  );
};

export default StudentEditForm;
