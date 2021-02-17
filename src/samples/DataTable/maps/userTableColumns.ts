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
    displayable: true
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    type: 'date',
    searchable: true,
    sortable: true,
    displayable: true
  },
  {
    field: 'expiredAt',
    headerName: 'Expired At',
    type: 'date',
    sortable: true,
    searchable: true,
    displayable: false
  }
];

export default userTableColumns;
