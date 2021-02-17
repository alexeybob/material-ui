import React, { FC } from 'react';
import { DataTableBody, DataTableHead, DataTablePaginate } from '.';

const DataTable: FC = () => {
  return (
    <div>
      <table className="table">
        <DataTableHead />
        <DataTableBody />
      </table>
      <DataTablePaginate />
    </div>
  );
};

export default DataTable;
