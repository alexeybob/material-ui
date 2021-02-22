/* eslint-disable no-console */
import React from 'react';
import { IDataTableProps } from './models';

const DataTableContext = React.createContext<{
  data: IDataTableProps['data'];
  columns: IDataTableProps['columns'];
  page: IDataTableProps['page'];
  length: number;
  perPage: number;
  setPage: (columns: IDataTableProps['page']) => void;
  onSearch: (query: string) => void;
  onSort: (field: string) => void;
  sortField: string;
  sortDirection: string;
}>({
  data: [],
  columns: [],
  page: 1,
  length: 0,
  perPage: 0,
  setPage: () => console.log('setPage handler should be defined'),
  onSearch: () => console.log('onSearch handler should be defined'),
  onSort: () => console.log('onSearch handler should be defined'),
  sortField: '',
  sortDirection: ''
});

export default DataTableContext;
