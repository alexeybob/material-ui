import { IColumns } from 'material/DataTable/models';

const columns: IColumns[] = [
  {
    field: 'id',
    headerName: 'Id',
    type: 'number',
    sortable: true,
    searchable: true
  },
  {
    field: 'name',
    headerName: 'Name',
    type: 'string',
    sortable: true,
    searchable: true
  },
  {
    field: 'firstName',
    headerName: 'First Name',
    type: 'string',
    sortable: true,
    searchable: true
  },
  {
    field: 'firstName',
    headerName: 'Last Name',
    type: 'string',
    sortable: true,
    searchable: true
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'string',
    sortable: true,
    searchable: true
  },
  {
    field: 'gender',
    headerName: 'Gender',
    type: 'string',
    sortable: true,
    searchable: true
  },
  {
    field: 'confirmed',
    headerName: 'Confirmed',
    type: 'boolean',
    sortable: true,
    searchable: false
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    type: 'date',
    searchable: true,
    sortable: true
  },
  {
    field: 'expiredAt',
    headerName: 'Expired At',
    type: 'date',
    sortable: true,
    searchable: true
  }
];

export default columns;
