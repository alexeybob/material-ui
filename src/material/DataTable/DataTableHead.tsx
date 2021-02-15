import React, { FC } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

interface IProps {
  columns: any[];
  hasActions: boolean;
  onSort: (field: string) => void;
  sortField: string;
  sortDirection: string;
}

const DataTableHead: FC<IProps> = ({
  columns,
  hasActions,
  onSort,
  sortField,
  sortDirection
}) => {
  const handleSort = (field: string) => {
    onSort(field);
  };

  const thead = columns.map((column) => {
    const { field, title, sort = true } = column;
    const className = [];

    if (true === sort) {
      className.push('sorting');
    }

    if (sortField === field) {
      className.push(sortDirection || 'default');
    } else if (true === sort) {
      className.push('default');
    }

    return (
      <STableHead
        onClick={() => true === sort && handleSort(field)}
        className={cn(className)}
        key={field}
      >
        {title}
      </STableHead>
    );
  });

  if (hasActions) {
    thead.push(<STableHead key="actions">Actions</STableHead>);
  }

  return (
    <thead>
      <tr>{thead}</tr>
    </thead>
  );
};

export default DataTableHead;

export const STableHead = styled.thead`
  &.sorting {
    cursor: pointer;
    padding-right: 18px;

    &.default {
      background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAAkElEQVQoz7XQMQ5AQBCF4dWQSJxC5wwax1Cq1e7BAdxD5SL+Tq/QCM1oNiJidwox0355mXnG/DrEtIQ6azioNZQxI0ykPhTQIwhCR+BmBYtlK7kLJYwWCcJA9M4qdrZrd8pPjZWPtOqdRQy320YSV17OatFC4euts6z39GYMKRPCTKY9UnPQ6P+GtMRfGtPnBCiqhAeJPmkqAAAAAElFTkSuQmCC')
        no-repeat center right;
      filter: brightness(85%);
    }

    &.asc {
      background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAZ0lEQVQ4y2NgGLKgquEuFxBPAGI2ahhWCsS/gDibUoO0gPgxEP8H4ttArEyuQYxAPBdqEAxPBImTY5gjEL9DM+wTENuQahAvEO9DMwiGdwAxOymGJQLxTyD+jgWDxCMZRsEoGAVoAADeemwtPcZI2wAAAABJRU5ErkJggg==')
        no-repeat center right;
      filter: brightness(85%);
    }

    &.desc {
      background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAZUlEQVQ4y2NgGAWjYBSggaqGu5FA/BOIv2PBIPFEUgxjB+IdQPwfC94HxLykus4GiD+hGfQOiB3J8SojEE9EM2wuSJzcsFMG4ttQgx4DsRalkZENxL+AuJQaMcsGxBOAmGvopk8AVz1sLZgg0bsAAAAASUVORK5CYII=')
        no-repeat center right;
      filter: brightness(85%);
    }
  }
`;
