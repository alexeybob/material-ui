import React, { FC } from 'react';
import { IColumns } from './models';

interface IProps {
  columns: IColumns[];
  data: { [key: string]: string | number | boolean }[];
  actions?: (dataItem: any) => string;
  search?: boolean;
  columnFormatters?: any;
}

const DataTable: FC<IProps> = ({ data }) => {
  return (
    <>
      <h1 className="mt-5">Data Table Sample</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id as number}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default DataTable;
