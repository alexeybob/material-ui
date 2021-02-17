import React, { FC, useContext } from 'react';
import DataTableContext from '../DataTableContext';

const DataTable: FC = () => {
  const { data } = useContext(DataTableContext);

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id as number}>{item.name}</li>
      ))}
    </ul>
  );
};

export default DataTable;
