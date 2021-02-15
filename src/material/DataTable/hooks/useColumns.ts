import { useState, useEffect } from 'react';

/**
 * {
 *     field: 'key'
 *     title: 'Label'
 *     type: string | date | boolean | number, default: string
 *     search: boolean, default: true
 *     sort: boolean, default: true
 * }
 */
const useColumns = (_columns) => {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    setColumns(
      _columns.map((column) => {
        // Check field property
        if (typeof column === 'string' || column instanceof String) {
          column = {
            field: column.charAt(0).toLowerCase() + column.slice(1)
          };
        }

        // Check title property
        const hasTitleProperty = Object.prototype.hasOwnProperty.call(column, 'title');
        if (!hasTitleProperty) {
          const result = column.field.replace(/([A-Z])/g, ' $1');
          column.title = result.charAt(0).toUpperCase() + result.slice(1);
        }

        // Check type property
        const hasTypeProperty = Object.prototype.hasOwnProperty.call(column, 'type');
        if (!hasTypeProperty) {
          column.type = 'string';
        }

        // Check search property
        const hasSearchProperty = Object.prototype.hasOwnProperty.call(column, 'search');
        if (!hasSearchProperty) {
          column.search = true;
        }

        // Check sort property
        const hasSortProperty = Object.prototype.hasOwnProperty.call(column, 'sort');
        if (!hasSortProperty) {
          column.sort = true;
        }

        return column;
      })
    );
  }, [_columns]);

  return columns;
};

export default useColumns;
