"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import DataListHeader from "../common/DataListHeader";
import DataListToolbar from "../common/DataListToolbar";
import { deleteTermAction } from "@/actions/term-actions";
import { getTermLabel } from "@/helpers/misc";
import { formatDatell } from "@/helpers/date-time";

const TermList = ({ data }) => {
  const { content, totalElements, pageable, size } = data;
  const { offset } = pageable;
  const router = useRouter();
  const pagePath = "/dashboard/education-term";

  const toolbar = (row) => (
    <DataListToolbar deleteAction={deleteTermAction} id={row.id} />
  );
  const header = <DataListHeader title="Terms" targetUrl={`${pagePath}/new`} />;

  const onPage = (e) => {
    router.push(`${pagePath}?page=${e.page}`);
  };

  const formatTerm = (row) => {
    return getTermLabel(row.term);
  };

  const formatDate = (date) => {
    return formatDatell(date);
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
        <Column body={formatTerm} header="Term"></Column>
        <Column
          body={(row) => formatDate(row.startDate)}
          header="Start Date"
          bodyClassName="Start Date"
        ></Column>
        <Column
          body={(row) => formatDate(row.endDate)}
          header="End Date"
          bodyClassName="End Date"
        ></Column>
        <Column
          body={(row) => formatDate(row.lastRegistrationDate)}
          header="Last Registration Date"
          bodyClassName="Last Registration Date"
        ></Column>
        <Column header="" body={toolbar} />
      </DataTable>
    </Container>
  );
};

export default TermList;
