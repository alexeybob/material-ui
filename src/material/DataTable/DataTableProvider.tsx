import React, { FC, useCallback, useState } from 'react';
import DataTableContext from './DataTableContext';
import { IDataTableProps } from './models';
import { usePagination, useFilter } from './hooks';

const DataTableProvider: FC = ({ children }) => {
  const [data, setData] = useState<IDataTableProps['data']>([]);
  const [columns, setColumns] = useState<IDataTableProps['columns']>([]);

  const { doFilter, filterResult } = useFilter(columns, data);
  const { page, setPage, pageData, length, perPage } = usePagination(filterResult);

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

  const handleSearch = useCallback(
    (query: string) => {
      setPage(1);
      doFilter(query || '');
    },
    [doFilter, setPage]
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
        setPage: _setPage,
        onSearch: handleSearch
      }}
    >
      {children}
    </DataTableContext.Provider>
  );
};

export default DataTableProvider;
