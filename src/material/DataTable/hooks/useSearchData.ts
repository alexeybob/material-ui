import { useCallback, useState } from 'react';

const useSearchData = (columns) => {
  const [query, setQuery] = useState('');

  const initSearchAction = useCallback(
    (_query) => {
      setQuery(_query);
    },
    [query]
  );

  const searchAction = useCallback(
    (list) => {
      if (query) {
        return list.filter((item) => {
          let includes = false;

          columns.forEach((column) => {
            const { field, search = true } = column;

            let data = item[field]['f'];
            data = (data ? data.toString() : '').toLowerCase();

            if (true === search && data.includes(query.toLowerCase())) {
              includes = true;
              return;
            }
          });

          return includes;
        });
      } else {
        return list;
      }
    },
    [columns, query]
  );

  return { query, initSearchAction, searchAction };
};

export default useSearchData;
