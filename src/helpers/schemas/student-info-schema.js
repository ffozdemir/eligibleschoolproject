import * as Yup from "yup";

export const studentInfoSchema = Yup.object({
	absentee: Yup.number()
		.typeError("Invalid absentee")
		.min(0, "Invalid absentee")
		.required("Required"),

	educationTermId: Yup.number()
		.typeError("Invalid educationTermId")
		.min(0, "Invalid absentee")
		.required("Required"),

	finalExam: Yup.number()
		.typeError("Invalid finalExam")
		.min(0, "Invalid finalExam")
		.max(100, "Invalid finalExam")
		.required("Required"),

	midtermExam: Yup.number()
		.typeError("Invalid midtermExam")
		.min(0, "Invalid midtermExam")
		.max(100, "Invalid midtermExam")
		.required("Required"),

	lessonId: Yup.number()
		.typeError("Invalid lessonId")
		.min(0, "Invalid lessonId")
		.required("Required"),

	studentId: Yup.number()
		.typeError("Invalid studentId")
		.min(0, "Invalid studentId")
		.required("Required"),

	infoNote: Yup.string()
		.min(10, "Min 10 chars")
		.max(25, "Max 25 chars")
		.required("Required"),
});
