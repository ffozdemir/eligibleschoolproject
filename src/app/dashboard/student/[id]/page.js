import PageHeader from "@/components/common/PageHeader";
import Spacer from "@/components/common/Spacer";
import TeacherEditForm from "@/components/dashboard/teacher/TeacherEditForm";
import { getAllPrograms } from "@/services/program-service";
import { getTeacherById } from "@/services/teacher-service";
import React from "react";

const Page = async ({ params }) => {
  const { id } = await params;

  const dataTeacher = (await getTeacherById(id)).json();
  const dataPrograms = (await getAllPrograms()).json();

  const [teacher, programs] = await Promise.all([dataTeacher, dataPrograms]);

  const newPrograms = programs.map((item) => ({
    value: item.lessonProgramId,
    label: item.lessonName.map((lesson) => lesson.lessonName).join(", "),
  }));

  const teacherProgramIdList = teacher.object.lessonsProgramList.map(
    (item) => item.id
  );

  return (
    <>
      <PageHeader title="Edit Teacher" />
      <Spacer />
      <TeacherEditForm
        user={teacher?.object}
        programs={newPrograms}
        teacherProgramIdList={teacherProgramIdList}
      />
      <Spacer />
    </>
  );
};

export default Page;
