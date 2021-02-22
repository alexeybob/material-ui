import React, { FC } from 'react';
import DataTableProvider from './DataTableProvider';
import DataTableContainer from './DataTableContainer';
import { IDataTableProps } from './models';

const DataTable: FC<IDataTableProps> = (props) => {
  return (
    <DataTableProvider {...props}>
      <DataTableContainer />
    </DataTableProvider>
  );
};

export default DataTable;
