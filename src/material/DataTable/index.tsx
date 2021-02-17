import React, { FC } from 'react';
import DataTableProvider from './DataTableProvider';
import DataTableContainer from './DataTableContainer';
import { IDataTableProps } from './models';

const DataTable: FC<IDataTableProps> = (props) => {
  return (
    <DataTableProvider>
      <DataTableContainer {...props} />
    </DataTableProvider>
  );
};

export default DataTable;
