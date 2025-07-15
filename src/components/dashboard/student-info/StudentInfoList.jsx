"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import DataListHeader from "../common/DataListHeader";
import DataListToolbar from "../common/DataListToolbar";
import { deleteStudentInfoAction } from "@/actions/student-info-action";

const StudenInfoList = ({ data }) => {
  const { content, totalElements, pageable, size } = data;
  const { offset } = pageable;
  const router = useRouter();
  const pagePath = "/dashboard/student-info";

  const toolbar = (row) => (
    <DataListToolbar
      deleteAction={deleteStudentInfoAction}
      id={row.id}
      editUrl={`/dashboard/student-info/${row.id}`}
    />
  );
  const header = (
    <DataListHeader title="Student Infos" targetUrl={`${pagePath}/new`} />
  );

  const onPage = (e) => {
    router.push(`${pagePath}?page=${e.page}`);
  };

  const formatStudent = (row) => {
    const { name, surname } = row.studentResponse;
    return `${name} ${surname}`;
  };

  return (
    <Container>
      <DataTable
        dataKey="id"
        lazy
        value={content}
        showGridlines
        stripedRows
        paginator
        rows={size}
        totalRecords={totalElements}
        first={offset}
        onPage={onPage}
        header={header}
      >
        <Column
          header="#"
          body={(row, options) => options.rowIndex + 1}
          headerStyle={{ width: "20px" }}
          bodyClassName="index"
        />
        <Column
          body={formatStudent}
          header="Student"
          bodyClassName="Student"
        ></Column>
        <Column
          field="lessonName"
          header="Lesson"
          bodyClassName="Lesson"
        ></Column>
        <Column
          field="absentee"
          header="Absentee"
          bodyClassName="Absentee"
        ></Column>
        <Column
          field="midtermExam"
          header="Mid Term"
          bodyClassName="Mid Term"
        ></Column>
        <Column field="finalExam" header="Final" bodyClassName="Final"></Column>
        <Column
          field="average"
          header="Average"
          bodyClassName="Average"
        ></Column>
        <Column field="note" header="Score" bodyClassName="Score"></Column>
        <Column header="" body={toolbar} />
      </DataTable>
    </Container>
  );
};

export default StudenInfoList;
