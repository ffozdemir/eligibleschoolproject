"use client";
import { createAdminAction } from "@/actions/admin-action";
import {
  FormContainer,
  TextInput,
  SelectInput,
  DateInput,
  MaskedInput,
  PasswordInput,
  SubmitButton,
} from "@/components/common/form-fields";

import { appConfig } from "@/helpers/config";
import { initialState } from "@/helpers/form-validation";
import React from "react";
import { useActionState } from "react";
import { Form } from "react-bootstrap";

const AdminCreateForm = () => {
  const [state, formAction] = useActionState(createAdminAction, initialState);

  return (
    <FormContainer>
      <Form action={formAction}>
        <TextInput label="First Name" name="name" error={state?.error?.name} />
        <TextInput
          label="Last Name"
          name="surname"
          error={state?.error?.surname}
        />
        <SelectInput
          name="gender"
          label="Gender"
          error={state?.error?.gender}
          options={appConfig.genders}
          optionLabel="label"
          optionValue="value"
        />
        <DateInput
          label="Date of birth"
          name="birthDay"
          error={state?.error?.birthDay}
          type="date"
        />
        <TextInput
          label="Place of birth"
          name="birthPlace"
          error={state?.error?.birthPlace}
        />
        <MaskedInput
          label="Phone Number"
          name="phoneNumber"
          error={state?.error?.phoneNumber}
          mask="999-999-9999"
        />
        <TextInput
          label="Username"
          name="username"
          error={state?.error?.username}
        />
        <PasswordInput
          label="Password"
          name="password"
          error={state?.error?.password}
        />
        <PasswordInput
          label="Confirm password"
          name="confirmPassword"
          error={state?.error?.confirmPassword}
        />
        <SubmitButton title="Create" />
      </Form>
    </FormContainer>
  );
};

export default AdminCreateForm;
