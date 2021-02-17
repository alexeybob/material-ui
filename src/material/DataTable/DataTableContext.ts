import React from 'react';

const DataTableContext = React.createContext<{
  data: string[];
}>({
  data: []
});

export default DataTableContext;
