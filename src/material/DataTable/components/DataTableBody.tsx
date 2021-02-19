import React, { FC, useContext, useMemo } from 'react';
import DataTableContext from '../DataTableContext';

const DataTableBody: FC = () => {
  const { data, columns } = useContext(DataTableContext);

  const tbody = useMemo(
    () =>
      data.length ? (
        data.map((item, itemIndex) => {
          const rows = columns.map((column, columnIndex) => {
            const { field, displayable, valueGetter } = column;

            return (
              displayable && (
                <td key={`Column-${field}-${columnIndex}`}>
                  {valueGetter?.(item) || item[field] || (
                    <span style={{ color: 'grey' }}>empty</span>
                  )}
                </td>
              )
            );
          });

          return <tr key={`Item${itemIndex}`}>{rows}</tr>;
        })
      ) : (
        <tr>
          <td align="center" colSpan={columns.length}>
            There are no data
          </td>
        </tr>
      ),
    [columns, data]
  );

  return <tbody>{tbody}</tbody>;
};

export default DataTableBody;
