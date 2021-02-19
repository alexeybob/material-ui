import { useState, useCallback, useEffect } from 'react';
import { IDataTableProps } from '../models';

interface IReturnObject {
  perPage: number;
  length: number;
  page: number;
  pageData: IDataTableProps['data'];
  setPage: (page: number) => void;
}

const usePagination = (data: IDataTableProps['data']): IReturnObject => {
  const [page, setPage] = useState<number>(1);
  const [perPage] = useState<number>(15);
  const [length, setLength] = useState<number>(0);
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

  const _setPage = useCallback(
    (page: number) => {
      setPage(page);
    },
    [setPage]
  );

  return { page, setPage: _setPage, perPage, length, pageData };
};

export default usePagination;
