import * as Yup from "yup";
import { getGenderValues } from "../misc";

const genderValues = getGenderValues();

export const assistantSchema = Yup.object({
  birthDay: Yup.date()
    .typeError("Invalid date format")
    .max(new Date(), "Birth date cannot be in the future")
    .required("Birth date is required"),

  birthPlace: Yup.string()
    .min(4, "Too short")

    .max(15, "Too long")
    .required("Birth place is required"),
  gender: Yup.string()
    .oneOf(genderValues, "Invalid gender")
    .required("Gender is required"),
  name: Yup.string()
    .min(4, "Too short")
    .max(15, "Too long")
    .required("Name is required"),
  surname: Yup.string()
    .min(4, "Too short")
    .max(15, "Too long")
    .required("Surname is required"),
  phoneNumber: Yup.string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  ssn: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{4}$/, "SSN must be in the format XXX-XX-XXXX")
    .required("SSN is required"),
  username: Yup.string()
    .min(4, "Too short")
    .max(15, "Too long")
    .required("Username is required"),
  password: Yup.string()
    .min(8, "Too short")
    .max(20, "Too long")
    .matches(/\d+/, "Password must contain at least one number")
    .matches(/[a-z]+/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]+/, "Password must contain at least oneuppercase letter")
    .matches(
      /[!@#$%^&*(),.?:;~%-_]+/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});
