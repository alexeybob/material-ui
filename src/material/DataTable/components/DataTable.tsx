import React, { FC } from 'react';
import { DataTableBody, DataTableHead, DataTablePaginate, DataTableSearch } from '.';

const DataTable: FC = () => {
  return (
    <div>
      <DataTableSearch />
      <table className="table">
        <DataTableHead />
        <DataTableBody />
      </table>
      <DataTablePaginate />
    </div>
  );
};

export default DataTable;
