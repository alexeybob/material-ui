import React, { FC } from 'react';
import useDataTableBody from './useDataTableBody';

const DataTableBody: FC = () => {
  const tbody = useDataTableBody();

  return <tbody>{tbody}</tbody>;
};

export default DataTableBody;
