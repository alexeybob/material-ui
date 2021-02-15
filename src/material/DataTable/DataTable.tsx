import React, { useState, useEffect, useCallback, FC } from 'react';
import {
  useColumns,
  usePaginate,
  useSearchData,
  useSortData,
  useTableData
} from '@ab/material/DataTable/hooks';
import DataTableSearch from '@ab/material/DataTable/DataTableSearch';
import DataTableHead from '@ab/material/DataTable/DataTableHead';
import DataTableBody from '@ab/material/DataTable/DataTableBody';
import DataTablePaginate from '@ab/material/DataTable/DataTablePaginate';

interface IProps {
  columns: any[];
  data: any[];
  actions?: (dataItem: any) => string;
  search: boolean;
  columnFormatters: any;
}

const DataTable: FC<IProps> = ({
  columns,
  data,
  actions,
  search = false,
  columnFormatters = {}
}) => {
  const preparedColumns = useColumns(columns);
  const { formattedData } = useTableData(data, preparedColumns);
  const [preparedData, setPreparedData] = useState([]);

  const { searchAction, initSearchAction, query } = useSearchData(preparedColumns);
  const { sortAction, initSortAction, sortField, sortDirection } = useSortData();
  const { page, setPage, limit, length, pageData } = usePaginate(preparedData);

  useEffect(() => {
    const searchedData = searchAction(formattedData);
    const sortedData = sortAction(searchedData);

    setPreparedData(sortedData);
  }, [formattedData, query, sortField, sortDirection]);

  const handleSort = useCallback(
    (_field) => {
      setPage(1);
      initSortAction(_field);
    },
    [initSortAction, setPage]
  );

  const handleSearch = useCallback(
    (_query) => {
      setPage(1);
      initSearchAction(_query);
    },
    [initSearchAction, setPage]
  );

  const handleSelectPage = useCallback(
    (_page) => {
      setPage(_page);
    },
    [setPage]
  );

  return (
    <>
      {search && <DataTableSearch onSearch={handleSearch} query={query} />}

      <table>
        <DataTableHead
          columns={preparedColumns}
          hasActions={!!actions}
          onSort={handleSort}
          sortField={sortField}
          sortDirection={sortDirection}
        />

        <DataTableBody
          columns={preparedColumns}
          data={pageData}
          actions={actions}
          columnFormatters={columnFormatters}
        />
      </table>

      <DataTablePaginate
        onSelectPage={handleSelectPage}
        page={page}
        length={length}
        limit={limit}
      />
    </>
  );
};

export default DataTable;
