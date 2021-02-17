import React, { FC } from 'react';
import { DataTable } from './components';
import { IDataTableProps } from './models';

const DataTableContainer: FC<IDataTableProps> = (props) => {
  return <DataTable {...props} />;
};

export default DataTableContainer;
