import React, { FC, useContext, useMemo } from 'react';
import DataTableContext from '../DataTableContext';

const DataTableBody: FC = () => {
  const { data, columns } = useContext(DataTableContext);

  const tbody = useMemo(
    () =>
      data.length ? (
        data.map((item, index) => {
          const rows = columns.map((column, index) => {
            return <td key={index}>{item[column.field]}</td>;
          });

          return <tr key={index}>{rows}</tr>;
        })
      ) : (
        <tr>
          <td colSpan={columns.length}>There are no data</td>
        </tr>
      ),
    [columns, data]
  );

  return <tbody>{tbody}</tbody>;
};

export default DataTableBody;
