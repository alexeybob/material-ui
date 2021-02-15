import React, { FC } from 'react';
import { formatDisplayData } from '@ab/material/DataTable/helpers';

interface IProps {
  columns: any[];
  data: any[];
  columnFormatters: any;
  actions?: (dataItem: any) => string;
}

const DataTableBody: FC<IProps> = ({
  columns,
  data: dataList,
  actions,
  columnFormatters
}) => {
  const tbody = dataList.length ? (
    dataList.map((dataItem, dataIndex) => {
      const rows = columns.map((column, index) => {
        const { field, type } = column;

        const data = formatDisplayData(dataItem, field, type, columnFormatters[field]);

        return <td key={index}>{data}</td>;
      });

      if (actions) {
        const actionData = actions(dataItem);

        rows.push(<td key="actions">{actionData}</td>);
      }

      return <tr key={dataIndex}>{rows}</tr>;
    })
  ) : (
    <tr>
      <td colSpan={actions ? columns.length + 1 : columns.length}>There are no data</td>
    </tr>
  );

  return <tbody>{tbody}</tbody>;
};

export default DataTableBody;
