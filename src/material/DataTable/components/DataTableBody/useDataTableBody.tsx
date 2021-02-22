import React, { useContext, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DataTableContext from '../../DataTableContext';

const useDataTableBody = (): JSX.Element[] | JSX.Element => {
  const { data, columns } = useContext(DataTableContext);

  return useMemo(
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
};

export default useDataTableBody;
