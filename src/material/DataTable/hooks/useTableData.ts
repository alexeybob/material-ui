import { useState, useEffect } from 'react';
import { formatData } from '@components/data-table/helpers';

const useTableData = (data, columns) => {
  const [formattedData, setFormattedData] = useState([]);

  useEffect(() => {
    const formatted = formatData(data, columns);

    setFormattedData(formatted);
  }, [data, columns]);

  return {
    formattedData
  };
};

export default useTableData;
