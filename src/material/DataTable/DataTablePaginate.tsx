import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { pagination } from '@ab/material/DataTable/helpers';

interface IProps {
  page: number;
  length: number;
  limit: number;
  onSelectPage: (page: number) => void;
}

const DataTablePaginate: FC<IProps> = ({ page, length, limit, onSelectPage }) => {
  const [pages, setPages] = useState(0);
  const [pager, setPager] = useState<(string | number)[]>([]);

  useEffect(() => {
    setPages(Math.ceil(length / limit));
  }, [length, limit]);

  useEffect(() => {
    setPager(pagination(page, pages));
  }, [page, pages]);

  const handlePageClick = (_page: number) => {
    onSelectPage(_page);
  };

  const showingFrom = (page - 1) * limit + 1;
  const showingTo = page * limit < length ? page * limit : length;

  return pages > 1 ? (
    <SPaginate>
      <SInfo>
        Showing {showingFrom} to {showingTo} of {length} entries
      </SInfo>
      <SPages>
        {pager.map((pageNum) =>
          typeof pageNum == 'number' ? (
            <SPageButton
              key={pageNum}
              className={pageNum === page ? 'active' : ''}
              onClick={() => handlePageClick(pageNum)}
            >
              {pageNum}
            </SPageButton>
          ) : (
            <SEtc key={Math.random()}>...</SEtc>
          )
        )}
      </SPages>
    </SPaginate>
  ) : null;
};

export default DataTablePaginate;

const SPaginate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0 0 0;
`;

const SInfo = styled.div``;

const SPages = styled.div`
  display: flex;
  align-items: flex-end;
`;

const SEtc = styled.span`
  display: inline-block;
  margin: 0 6px;
  letter-spacing: 0.2rem;
`;

const SDefaultButton = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;

  background: transparent;

  /* inherit font & color from ancestor */
  color: inherit;
  font: inherit;

  /* Normalize \`line-height\`. Cannot be changed from \`normal\` in Firefox 4+. */
  line-height: normal;

  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  /* Corrects inability to style clickable \`input\` types in iOS */
  -webkit-appearance: none;

  outline: none;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

const SCommonButton = styled(SDefaultButton)`
  border-radius: 6px;
  border: 1px solid #e5eaea;
  margin: 0 0.1rem;

  &:hover,
  &.active {
    cursor: pointer;
    border: 1px solid #979797;
    background: #404348;
    color: #fff;
  }

  &:disabled,
  &[disabled] {
    cursor: auto;
    opacity: 0.3;
  }
`;

const SPageButton = styled(SCommonButton)`
  padding: 0.75rem 0;
  width: 3rem;
  border: 1px solid #979797;
`;
