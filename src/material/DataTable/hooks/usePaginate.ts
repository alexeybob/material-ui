import { useState, useCallback, useEffect } from 'react';
import { IDataTableProps } from '../models';

const usePaginate = (data: IDataTableProps['data']) => {
  const [page, _setPage] = useState(1);
  const [perPage] = useState(15);
  const [length, setLength] = useState(0);
  const [pageData, setPageData] = useState<IDataTableProps['data']>([]);

  useEffect(() => {
    setLength(data.length);
  }, [data, setLength]);

  useEffect(() => {
    setPageData(
      data
        .slice()
        .filter((item, index) => index >= (page - 1) * perPage && index < page * perPage)
    );
  }, [page, data, perPage]);

  const setPage = useCallback(
    (_page) => {
      _setPage(_page);
    },
    [_setPage]
  );

  return { page, setPage, perPage, length, pageData };
};

export default usePaginate;
