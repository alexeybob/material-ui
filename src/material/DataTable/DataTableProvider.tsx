import React, { FC, useCallback, useState } from 'react';
import DataTableContext from './DataTableContext';
import { IDataTableProps } from './models';
import { usePaginate } from './hooks';

const DataTableProvider: FC = ({ children }) => {
  const [data, setData] = useState<IDataTableProps['data']>([]);
  const [columns, setColumns] = useState<IDataTableProps['columns']>([]);

  const { page, setPage, pageData, length, perPage } = usePaginate(data);

  const _setData = useCallback((data: IDataTableProps['data']) => {
    setData(data);
  }, []);

  const _setColumns = useCallback((columns: IDataTableProps['columns']) => {
    setColumns(columns);
  }, []);

  const _setPage = useCallback(
    (page: IDataTableProps['page']) => {
      page && setPage(page);
    },
    [setPage]
  );

  return (
    <DataTableContext.Provider
      value={{
        data: pageData,
        setData: _setData,
        columns,
        setColumns: _setColumns,
        page,
        length,
        perPage,
        setPage: _setPage
      }}
    >
      {children}
    </DataTableContext.Provider>
  );
};

export default DataTableProvider;
