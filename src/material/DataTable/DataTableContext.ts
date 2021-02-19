/* eslint-disable no-console */
import React from 'react';
import { IDataTableProps } from './models';

const DataTableContext = React.createContext<{
  data: IDataTableProps['data'];
  setData: (data: IDataTableProps['data']) => void;
  columns: IDataTableProps['columns'];
  setColumns: (columns: IDataTableProps['columns']) => void;
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
  setData: () => console.log('setData handler should be defined'),
  columns: [],
  setColumns: () => console.log('setColumns handler should be defined'),
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
