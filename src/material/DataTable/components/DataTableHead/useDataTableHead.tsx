import React, { useCallback, useContext, useMemo } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import DataTableContext from '../../DataTableContext';
import sortableIcon from './assets/sortable.svg';
import ascIcon from './assets/asc.svg';
import descIcon from './assets/desc.svg';

const useDataTableHead = (): (false | JSX.Element)[] => {
  const { columns, onSort, sortField, sortDirection } = useContext(DataTableContext);

  const handleSort = useCallback(
    (field: string) => {
      onSort(field);
    },
    [onSort]
  );

  return useMemo(
    () =>
      columns.map((column) => {
        const { field, headerName, displayable, sortable } = column;

        return (
          displayable && (
            <td key={field}>
              <SColumnHeader
                onClick={() => sortable && handleSort(field)}
                className={cn({
                  sortable:
                    (sortable && sortField !== field) ||
                    (sortable && sortField === field && !sortDirection),
                  asc: sortable && sortField === field && sortDirection === 'asc',
                  desc: sortable && sortField === field && sortDirection === 'desc'
                })}
              >
                {headerName}
              </SColumnHeader>
            </td>
          )
        );
      }),
    [columns, handleSort, sortDirection, sortField]
  );
};

export default useDataTableHead;

const SColumnHeader = styled.div`
  &.sortable {
    background: url(${sortableIcon}) center right/18px no-repeat;
    padding-right: 20px;
    cursor: pointer;
  }

  &.asc {
    background: url(${ascIcon}) center right/18px no-repeat;
    padding-right: 20px;
    cursor: pointer;
    text-decoration: underline;
  }

  &.desc {
    background: url(${descIcon}) center right/18px no-repeat;
    padding-right: 20px;
    cursor: pointer;
    text-decoration: underline;
  }
`;
