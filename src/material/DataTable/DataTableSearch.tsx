import React, { FC, ChangeEvent } from 'react';
import styled from 'styled-components';

interface IProps {
  query: string;
  onSearch: (query: string) => void;
}

const DataTableSearch: FC<IProps> = ({ query, onSearch }) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.currentTarget.value;

    onSearch && onSearch(query);
  };

  return (
    <SSearchPanel>
      <input
        type="text"
        placeholder={'Search ...'}
        value={query}
        onChange={handleSearch}
      />
    </SSearchPanel>
  );
};

export default DataTableSearch;

export const SSearchPanel = styled.div`
  margin-bottom: 10px;
`;
