import React, { FC, useCallback, useState } from 'react';
import DataTableContext from './DataTableContext';
import { IDataTableProps } from './models';
import { usePagination, useFilter, useSort } from './hooks';

const DataTableProvider: FC = ({ children }) => {
  const [data, setData] = useState<IDataTableProps['data']>([]);
  const [columns, setColumns] = useState<IDataTableProps['columns']>([]);

  const { setFilterQuery, filteredData } = useFilter(columns, data);
  const { sortField, sortDirection, setSortField, sortedData } = useSort(
    columns,
    filteredData
  );
  const { page, setPage, pageData, length, perPage } = usePagination(sortedData);

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
      setFilterQuery(query || '');
    },
    [setFilterQuery, setPage]
  );

  const handleSort = useCallback(
    (field: string) => {
      setPage(1);
      setSortField(field);
    },
    [setPage, setSortField]
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
        onSearch: handleSearch,
        onSort: handleSort,
        sortField,
        sortDirection
      }}
    >
      {children}
    </DataTableContext.Provider>
  );
};

export default DataTableProvider;
