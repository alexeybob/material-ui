export type tDataType = 'number' | 'boolean' | 'string' | 'datetime' | 'date' | 'time';

interface IDataItem {
  [key: string]: any;
}

export interface IColumns {
  field: string; // key
  headerName: string; // header name
  type: tDataType; // data type
  description?: string; // short description
  searchable: boolean; // is searchable
  sortable: boolean; // is sortable
  displayable: boolean; // is displayable
  valueGetter?: <T extends IDataItem>(data: T) => any;
}

export interface IDataTableProps {
  columns: IColumns[];
  data: IDataItem[];
  actions?: (dataItem: any) => string;
  search?: boolean;
  columnFormatters?: any;
  page?: number;
}
