import React, { useCallback, useContext, useMemo } from 'react';
import DataTableContext from '../../DataTableContext';

interface IReturnObject {
  handleSearch: (e: React.FormEvent<HTMLInputElement>) => void;
  display: boolean;
}

const useDataTableSearch = (): IReturnObject => {
  const { columns, onSearch } = useContext(DataTableContext);

  const handleSearch = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      onSearch(e.currentTarget.value);
    },
    [onSearch]
  );

  const display = useMemo(
    () => !!columns.find((column) => column.searchable && column.displayable),
    [columns]
  );

  return { display, handleSearch };
};

export default useDataTableSearch;
