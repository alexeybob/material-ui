import React, { FC } from 'react';
import { IDataTableProps } from '../models';

const DataTable: FC<IDataTableProps> = ({ data }) => {
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
