import { TableCell, TableRow } from '@material-ui/core';
import React from 'react';

function User({ user, onClick }) {
  return (
    <TableRow onClick={() => onClick(user.USERID)}>
      <TableCell>
        <b>{user.USERID}</b>
      </TableCell>
      <TableCell>
        <b>{user.USERNM}</b> 
      </TableCell>
      <TableCell>
        {user.SAUPNO}
      </TableCell>
      <TableCell>
        {user.CUSTNM}
      </TableCell>
    </TableRow>
  );
}

function UserList({ users, onClick }) {
  return (
    <>
      {(!!users ? users : []).map(user => (
        <User 
          user={user} 
          key={user.USERID} 
          onClick={onClick}
        />
      ))}
    </>
  );
}

export default UserList; 