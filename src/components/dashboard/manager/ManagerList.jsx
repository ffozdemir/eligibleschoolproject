"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import DataListHeader from "../common/DataListHeader";
import DataListToolbar from "../common/DataListToolbar";
import { deleteManagerAction } from "@/actions/manager-action";

const ManagerList = ({ data }) => {
  const { content, totalElements, pageable, size } = data;
  const { offset } = pageable;
  const router = useRouter();
  const pagePath = "/dashboard/manager";

  const toolbar = (row) => (
    <DataListToolbar
      deleteAction={deleteManagerAction}
      id={row.userId}
      editUrl={`/dashboard/manager/${row.userId}`}
    />
  );
  const header = (
    <DataListHeader title="Admins" targetUrl={`${pagePath}/new`} />
  );

  const onPage = (e) => {
    router.push(`${pagePath}?page=${e.page}`);
  };

  return (
    <Container>
      <DataTable
        dataKey="userId"
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
          field="name"
          header="First Name"
          bodyClassName="First Name"
        ></Column>
        <Column
          field="surname"
          header="Last Name"
          bodyClassName="Last Name"
        ></Column>
        <Column
          field="username"
          header="User Name"
          bodyClassName="User Name"
        ></Column>
        <Column header="" body={toolbar} />
      </DataTable>
    </Container>
  );
};

export default ManagerList;
