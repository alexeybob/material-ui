import React, { FC, useContext, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DataTableContext from '../DataTableContext';

const DataTableBody: FC = () => {
  const { data, columns } = useContext(DataTableContext);

  const tbody = useMemo(
    () =>
      data.length ? (
        data.map((item) => {
          const rows = columns.map((column) => {
            const { field, displayable, valueGetter } = column;

            return (
              displayable && (
                <td key={uuidv4()}>
                  {valueGetter?.(item) || item[field] || (
                    <span style={{ color: 'grey' }}>empty</span>
                  )}
                </td>
              )
            );
          });

          return <tr key={uuidv4()}>{rows}</tr>;
        })
      ) : (
        <tr key={uuidv4()}>
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
