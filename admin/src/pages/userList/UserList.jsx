import './userList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { format } from 'timeago.js';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteClient, getClients } from '../../redux/apiCalls';

const UserList = () => {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.client.clients);

  useEffect(() => {
    getClients(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteClient(id, dispatch);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 210 },
    {
      field: 'username',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src={
                params.row.avatar ||
                'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif'
              }
              alt="avatar"
            />
            {params.row.username}
          </div>
        );
      }
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'isAdmin',
      headerName: 'Admin',
      width: 120
    },
    {
      field: 'createdAt',
      headerName: 'Created_At',
      width: 160,
      renderCell: (params) => {
        return <>{`${format(params.row.createdAt)}`}</>;
      }
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row._id}`}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      }
    }
  ];

  return (
    <div className="userList">
      <DataGrid
        _id={Math.random()}
        rows={clients}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row?._id}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
