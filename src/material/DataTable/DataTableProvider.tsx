import React, { FC } from 'react';
import DataTableContext from './DataTableContext';

interface IProps {}

const DataTableProvider: FC<IProps> = ({ children }) => {
  return (
    <DataTableContext.Provider value={{ data: [] }}>{children}</DataTableContext.Provider>
  );
};

export default DataTableProvider;
