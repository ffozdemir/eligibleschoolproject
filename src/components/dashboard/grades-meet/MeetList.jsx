"use client";

import { formatDatell, formatTimeLT } from "@/helpers/date-time";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React from "react";
import { Container } from "react-bootstrap";
import DataListHeader from "../common/DataListHeader";

const MeetList = ({ meets }) => {
  const header = <DataListHeader title="Meets" />;
  return (
    <Container>
      <DataTable
        dataKey="id"
        lazy
        value={meets}
        showGridlines
        stripedRows
        header={header}
      >
        <Column
          header="#"
          body={(row, options) => options.rowIndex + 1}
          headerStyle={{ width: "20px" }}
          bodyClassName="index"
        />
        <Column
          field="teacherName"
          header="Teacher"
          bodyClassName="Teacher"
        ></Column>
        <Column
          body={(row) => formatDatell(row.date)}
          header="Date"
          bodyClassName="Date"
        ></Column>
        <Column
          body={(row) => formatTimeLT(row.startTime)}
          header="Start Time"
          bodyClassName="Midterm Exam"
        ></Column>
        <Column
          body={(row) => formatTimeLT(row.stopTime)}
          header="End Time"
          bodyClassName="End Time"
        ></Column>

        <Column
          field="description"
          header="Notes"
          bodyClassName="Notes"
        ></Column>
      </DataTable>
    </Container>
  );
};

export default MeetList;
