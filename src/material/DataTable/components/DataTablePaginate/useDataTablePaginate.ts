import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import DataTableContext from 'material/DataTable/DataTableContext';

interface IReturnObject {
  pages: number;
  pager: (number | string)[];
  handlePageClick: (page: number) => void;
  showingFrom: 0 | undefined | number;
  showingTo: number;
  page: number | undefined;
}

const useDataTablePaginate = (): IReturnObject => {
  const [pages, setPages] = useState<number>(0);
  const [pager, setPager] = useState<(number | string)[]>([]);
  const { page, setPage, perPage, length } = useContext(DataTableContext);

  useEffect(() => {
    setPages(Math.ceil(length / perPage));
  }, [length, perPage]);

  useEffect(() => {
    if (page) {
      const center = [page - 2, page - 1, page, page + 1, page + 2],
        filteredCenter: (string | number)[] = center.filter((p) => p > 1 && p < pages),
        includeThreeLeft = page === 5,
        includeThreeRight = page === pages - 4,
        includeLeftDots = page > 5,
        includeRightDots = page < pages - 4;

      if (includeThreeLeft) filteredCenter.unshift(2);
      if (includeThreeRight) filteredCenter.push(pages - 1);

      if (includeLeftDots) filteredCenter.unshift('...');
      if (includeRightDots) filteredCenter.push('...');

      setPager([1, ...filteredCenter, pages]);
    }
  }, [page, pages]);

  const handlePageClick = useCallback(
    (page: number) => {
      setPage(page);
    },
    [setPage]
  );

  const showingFrom = useMemo(() => page && (page - 1) * perPage + 1, [page, perPage]);
  const showingTo = useMemo(
    () => (page && page * perPage < length ? page * perPage : length),
    [length, page, perPage]
  );

  return {
    page,
    pages,
    pager,
    showingFrom,
    showingTo,
    handlePageClick
  };
};

export default useDataTablePaginate;
