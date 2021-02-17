import React, { FC, useContext, useEffect } from 'react';
import { DataTable } from './components';
import { IDataTableProps } from './models';
import DataTableContext from './DataTableContext';

const DataTableContainer: FC<IDataTableProps> = ({ data, columns }) => {
  const { setData } = useContext(DataTableContext);
  const { setColumns } = useContext(DataTableContext);

  useEffect(() => {
    setData(data);
    setColumns(columns);
  }, [columns, data, setColumns, setData]);

  return <DataTable />;
};

export default DataTableContainer;
