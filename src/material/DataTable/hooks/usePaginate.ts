import { useState, useCallback, useEffect } from 'react';

const usePaginate = (_data) => {
  const [data, setData] = useState([]);
  const [page, _setPage] = useState(1);
  const [limit] = useState(15);
  const [length, setLength] = useState(0);
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    setData(_data);
  }, [_data, setData]);

  useEffect(() => {
    setLength(data.length);
  }, [data, setLength]);

  useEffect(() => {
    setPageData(
      data
        .slice()
        .filter((item, index) => index >= (page - 1) * limit && index < page * limit)
    );
  }, [page, data, limit]);

  const setPage = useCallback(
    (_page) => {
      _setPage(_page);
    },
    [_setPage, limit]
  );

  return { page, setPage, limit, length, pageData };
};

export default usePaginate;
