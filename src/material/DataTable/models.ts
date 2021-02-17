export type tDataType = 'number' | 'boolean' | 'string' | 'datetime' | 'date' | 'time';

export interface IColumns {
  field: string; // key
  headerName: string; // header name
  type: tDataType; // data type
  description?: string; // short description
  searchable: boolean; // is searchable
  sortable: boolean; // is sortable
  displayable: boolean; // is displayable
}

export interface IDataTableProps {
  columns: IColumns[];
  data: { [key: string]: string | number | boolean }[];
  actions?: (dataItem: any) => string;
  search?: boolean;
  columnFormatters?: any;
}
