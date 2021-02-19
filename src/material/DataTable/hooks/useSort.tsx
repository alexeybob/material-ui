import { useCallback, useMemo, useState } from 'react';
import { IDataItem, IDataTableProps } from '../models';

interface IReturnObject {
  sortDirection: string;
  sortField: string;
  sortedData: IDataItem[];
  setSortField: (_field: string) => void;
}

const useSort = (
  columns: IDataTableProps['columns'],
  data: IDataTableProps['data']
): IReturnObject => {
  const [field, setField] = useState('');
  const [direction, setDirection] = useState('');

  const setSortField = useCallback(
    (_field: string) => {
      setField(_field);

      let currentDirection = '';
      if (!field || field === _field) {
        if ('' === direction) {
          currentDirection = 'asc';
        } else if ('asc' === direction) {
          currentDirection = 'desc';
        } else if ('desc' === direction) {
          currentDirection = '';
        }
      } else {
        currentDirection = 'asc';
      }

      setDirection(currentDirection);
    },
    [direction, field]
  );

  const sortedData = useMemo(() => {
    const { valueGetter } = columns.find((column) => column.field === field) || {};

    if ('' === direction) {
      return data.slice();
    } else {
      return data.slice().sort((a, b) => {
        const valueA =
          a[field] !== null && typeof a[field] !== 'undefined'
            ? a[field]
            : valueGetter?.(a);
        const valueB =
          b[field] !== null && typeof b[field] !== 'undefined'
            ? b[field]
            : valueGetter?.(b);

        if ('asc' === direction) {
          return valueA > valueB ? 1 : valueB > valueA ? -1 : 0;
        } else {
          return valueA > valueB ? -1 : valueB > valueA ? 1 : 0;
        }
      });
    }
  }, [columns, data, direction, field]);

  return { sortedData, sortField: field, sortDirection: direction, setSortField };
};

export default useSort;
