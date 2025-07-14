import * as Yup from "yup";
import { isStringArray } from "../misc";

export const chooseLessonSchema = Yup.object({
	lessonProgramId: Yup.string()
		.test("isArray", "Required", (val) => isStringArray(val))
		.required("Required"),
});
