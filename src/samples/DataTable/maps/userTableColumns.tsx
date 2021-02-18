import React from 'react';
import { IColumns } from 'material/DataTable/models';

const userTableColumns: IColumns[] = [
  {
    field: 'id',
    headerName: 'Id',
    type: 'number',
    sortable: true,
    searchable: true,
    displayable: true
  },
  {
    field: 'name',
    headerName: 'Name',
    type: 'string',
    sortable: true,
    searchable: true,
    displayable: false
  },
  {
    field: 'firstName',
    headerName: 'First Name',
    type: 'string',
    sortable: true,
    searchable: true,
    displayable: true
  },
  {
    field: 'lastName',
    headerName: 'Last Name',
    type: 'string',
    sortable: true,
    searchable: true,
    displayable: true
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'string',
    sortable: true,
    searchable: true,
    displayable: true
  },
  {
    field: 'gender',
    headerName: 'Gender',
    type: 'string',
    sortable: true,
    searchable: true,
    displayable: false
  },
  {
    field: 'confirmed',
    headerName: 'Confirmed',
    type: 'boolean',
    sortable: true,
    searchable: false,
    displayable: true,
    valueGetter: (data) =>
      data.confirmed ? (
        <div style={{ color: 'green' }}>Yes</div>
      ) : (
        <div style={{ color: 'red' }}>No</div>
      )
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    type: 'date',
    searchable: true,
    sortable: true,
    displayable: true,
    valueGetter: (data) => new Date(data.createdAt as string).toLocaleDateString()
  },
  {
    field: 'expiredAt',
    headerName: 'Expired At',
    type: 'date',
    sortable: true,
    searchable: true,
    displayable: true,
    valueGetter: (data) => new Date(data.expiredAt as string).toLocaleDateString()
  }
];

export default userTableColumns;
