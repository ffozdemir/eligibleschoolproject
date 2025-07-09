import * as Yup from "yup";
import { getTermValues } from "../misc";

const terms = getTermValues();

export const termSchema = Yup.object({
  term: Yup.string()
    .oneOf(terms, "Invalid term selected")
    .required("Term is required"),

  startDate: Yup.date()
    .typeError("Start date must be a valid date")
    .min(new Date(), "Start date cannot be in the past")
    .required("Start date is required"),

  endDate: Yup.date()
    .typeError("End date must be a valid date")
    .min(Yup.ref("startDate"), "End date must be after start date")
    .required("End date is required"),

  lastRegistirationDate: Yup.date()
    .typeError("Last registration date must be a valid date")
    .max(
      Yup.ref("startDate"),
      "Last registration date cannot be in the pastmust be after start date"
    )
    .required("Last registration date is required"),
});
