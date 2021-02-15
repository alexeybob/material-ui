import { useState, useCallback } from 'react';

const useSortData = () => {
  const [field, setField] = useState('');
  const [direction, setDirection] = useState('');

  const defineDirection = useCallback(
    (_field) => {
      let _direction = '';

      if (!field || field === _field) {
        if ('' === direction) {
          _direction = 'asc';
        } else if ('asc' === direction) {
          _direction = 'desc';
        } else if ('desc' === direction) {
          _direction = '';
        }
      } else {
        _direction = 'asc';
      }

      setDirection(_direction);
    },
    [direction, field]
  );

  const initSortAction = useCallback(
    (_field) => {
      setField(_field);
      defineDirection(_field);
    },
    [field, direction]
  );

  const sortAction = useCallback(
    (_data) => {
      if ('' === direction) {
        return _data.slice();
      } else {
        return _data.slice().sort((a, b) => {
          const valueA = a[field]['v'];
          const valueB = b[field]['v'];

          if ('asc' === direction) {
            return valueA > valueB ? 1 : valueB > valueA ? -1 : 0;
          } else {
            return valueA > valueB ? -1 : valueB > valueA ? 1 : 0;
          }
        });
      }
    },
    [direction, field]
  );

  return { sortAction, initSortAction, sortField: field, sortDirection: direction };
};

export default useSortData;
