import React, { FC } from 'react';
import DataTableHead from './DataTableHead';
import DataTableBody from './DataTableBody';

const DataTable: FC = () => {
  return (
    <table className="table">
      <DataTableHead />
      <DataTableBody />
    </table>
  );
};

export default DataTable;
