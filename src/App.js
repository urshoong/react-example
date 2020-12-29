import React, { useState, useEffect/*, useMemo*/ } from 'react';
import UserList from './UserList';
import axios from 'axios';
import { TableBody, TableCell, TableHead, TableRow, Table } from '@material-ui/core';

const countActiveUsers = (users) => {
  console.log('전체 사용자 수를 세는 중...');
  return !!users ? users.length : 0;
};

const App = () => {
  const URL = '/userinfo/my';
  const [users, setUsers] = useState([]);
  const initUserInfo = () => {
    const fetchData = async () => {
      try{
        const response = await axios.get(URL, );
        console.log(response);
        setUsers(response.data.recordset);
      }catch(err){
        console.log(err);
      }
    }
    fetchData();
  }

  useEffect(() => {
    initUserInfo();
    /*
    const fetchData = async () => 
      try{
        const response = await axios.get(URL, );
        console.log(response);
        setUsers(response.data.recordset);
      }catch(err){
        console.log(err);
      }
    }
    fetchData();
    */
  }, []);

  const onClick = USERID => {
    console.log(USERID);
  }

  const count = countActiveUsers(users);
  //const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>사용자명</TableCell>
            <TableCell>사업자번호</TableCell>
            <TableCell>사업자명</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <UserList users={users} onClick={onClick} />
        </TableBody>
      </Table>
      <br/>
      <div>전체 사용자 수 : {count}</div>
    </>
  );
}

export default App;