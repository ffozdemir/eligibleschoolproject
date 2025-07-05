"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const AdminList = ({ data }) => {
  const { content } = data;
  return (
    <Container>
      <DataTable value={content} tableStyle={{ minWidth: "50rem" }}>
        <Column field="username" header="User Name"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="surname" header="Surname"></Column>
      </DataTable>
    </Container>
  );
};

export default AdminList;
