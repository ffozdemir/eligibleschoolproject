"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const AdminList = ({ data }) => {
  const { content } = data;
  return (
    <Container>
      <DataTable
        value={content}
        tableStyle={{ minWidth: "50rem" }}
        showGridlines
        stripedRows
      >
        <Column field="name" header="First Name"></Column>
        <Column field="surname" header="Lastname"></Column>
        <Column field="username" header="User Name"></Column>
      </DataTable>
    </Container>
  );
};

export default AdminList;
