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
}>({
  data: [],
  // eslint-disable-next-line no-console
  setData: () => console.log('setData handler should be defined'),
  columns: [],
  // eslint-disable-next-line no-console
  setColumns: () => console.log('setColumns handler should be defined'),
  page: 1,
  length: 0,
  perPage: 0,
  // eslint-disable-next-line no-console
  setPage: () => console.log('setPage handler should be defined')
});

export default DataTableContext;
