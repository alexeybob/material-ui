import React, { FC } from 'react';
import { DataTableBody, DataTableHead } from '.';

const DataTable: FC = () => {
  return (
    <table className="table">
      <DataTableHead />
      <DataTableBody />
    </table>
  );
};

export default DataTable;
