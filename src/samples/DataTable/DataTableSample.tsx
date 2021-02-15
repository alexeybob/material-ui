import React, { FC, useEffect } from 'react';
import { findAllUsers } from '../../services/json-server/api/user-api';

const DataTableSample: FC = () => {
  useEffect(() => {
    findAllUsers().then((users) => {
      // eslint-disable-next-line no-console
      console.log(users);
    });
  }, []);

  return <div>DataTableSample</div>;
};

export default DataTableSample;
