import { useCallback, useMemo, useState } from 'react';
import { IDataItem, IDataTableProps } from '../models';

interface IReturnObject {
  filterQuery: string;
  filterResult: IDataItem[];
  doFilter: (query: string) => void;
}

const useFilter = (
  columns: IDataTableProps['columns'],
  data: IDataTableProps['data']
): IReturnObject => {
  const [filterQuery, setfilterQuery] = useState<string>('');

  const doFilter = useCallback((query: string) => {
    setfilterQuery(query);
  }, []);

  const filterResult = useMemo(
    () =>
      filterQuery
        ? data.filter((item) => {
            let includes = false;

            columns.forEach((column) => {
              const { field, searchable, displayable, valueGetter } = column;

              let row = '';
              if (valueGetter) {
                row = valueGetter(item).toString().toLowerCase();
              } else {
                row = (item[field] ? item[field].toString() : '').toLowerCase();
              }

              if (searchable && displayable && row.includes(filterQuery.toLowerCase())) {
                includes = true;
                return;
              }
            });

            return includes;
          })
        : data,
    [columns, data, filterQuery]
  );

  return { filterQuery, filterResult, doFilter };
};

export default useFilter;
