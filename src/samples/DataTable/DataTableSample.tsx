import React, { FC, useEffect, useState } from 'react';
import { findAllUsers } from '../../services/json-server/api/user-api';
import DataTable from 'material/DataTable';
import { userTableColumns } from './maps';
import { IUserModel } from '../../services/json-server/models';

const DataTableSample: FC = () => {
  const [users, setUsers] = useState<IUserModel[]>([]);

  useEffect(() => {
    findAllUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return <DataTable columns={userTableColumns} data={users} />;
};

export default DataTableSample;
