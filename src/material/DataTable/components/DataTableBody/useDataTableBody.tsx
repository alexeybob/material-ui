import React, { useContext, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import DataTableContext from 'material/DataTable/DataTableContext';

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

          return (
            <motion.tr
              key={uuidv4()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'easeOut', duration: 0.5 }}
            >
              {rows}
            </motion.tr>
          );
        })
      ) : (
        <motion.tr
          key={uuidv4()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 1, delay: 1 }}
        >
          <td align="center" colSpan={columns.length}>
            There are no data
          </td>
        </motion.tr>
      ),
    [columns, data]
  );
};

export default useDataTableBody;
