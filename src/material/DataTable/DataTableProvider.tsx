import React, { FC, useCallback, useState } from 'react';
import DataTableContext from './DataTableContext';
import { IDataTableProps } from './models';

const DataTableProvider: FC = ({ children }) => {
  const [data, setData] = useState<IDataTableProps['data']>([]);
  const [columns, setColumns] = useState<IDataTableProps['columns']>([]);

  const _setData = useCallback((data: IDataTableProps['data']) => {
    setData(data);
  }, []);

  const _setColumns = useCallback((columns: IDataTableProps['columns']) => {
    setColumns(columns);
  }, []);

  return (
    <DataTableContext.Provider
      value={{ data, setData: _setData, columns, setColumns: _setColumns }}
    >
      {children}
    </DataTableContext.Provider>
  );
};

export default DataTableProvider;
