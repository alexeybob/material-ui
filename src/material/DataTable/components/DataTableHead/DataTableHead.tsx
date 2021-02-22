import React, { FC } from 'react';
import useDataTableHead from './useDataTableHead';

const DataTableHead: FC = () => {
  const thead = useDataTableHead();

  return (
    <thead>
      <tr>{thead}</tr>
    </thead>
  );
};

export default DataTableHead;
