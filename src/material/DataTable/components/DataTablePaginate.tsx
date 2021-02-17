import React, { FC, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import DataTableContext from '../DataTableContext';

const DataTablePaginate: FC = () => {
  const [pages, setPages] = useState(0);
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
              className={cn(pageNum === page && 'active')}
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
