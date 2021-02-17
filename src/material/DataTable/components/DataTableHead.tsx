import React, { FC, useContext, useMemo } from 'react';
import DataTableContext from '../DataTableContext';

const DataTableHead: FC = () => {
  const { columns } = useContext(DataTableContext);

  const thead = useMemo(
    () =>
      columns.map((column) => {
        const { field, headerName, displayable } = column;

        return displayable && <td key={field}>{headerName}</td>;
      }),
    [columns]
  );

  return (
    <thead>
      <tr>{thead}</tr>
    </thead>
  );
};

export default DataTableHead;
