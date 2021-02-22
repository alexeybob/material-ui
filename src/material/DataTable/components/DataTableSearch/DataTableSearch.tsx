import React, { FC } from 'react';
import styled from 'styled-components';
import useDataTableSearch from './useDataTableSearch';

const DataTableSearch: FC = () => {
  const { display, handleSearch } = useDataTableSearch();

  return display ? (
    <SSearchInput type={'text'} placeholder={'Search ...'} onChange={handleSearch} />
  ) : null;
};

export default DataTableSearch;

const SSearchInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin-bottom: 10px;
`;
