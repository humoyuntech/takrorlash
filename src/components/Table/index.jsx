/* eslint-disable react/prop-types */

import { memo } from 'react';
import {UserContext} from '../../contex/user'


export const Table = (props) => {

const [data, dispatch] = UserContext();

const onDelete = (id)=>{
  let res = data.filter((val) => val.id !== id)
  dispatch({type: 'delete', payload: res})
}

console.log('Table render', props.title);

  return (
    <div>
      <h1>Student length: {data?.length}</h1>
      {/* <input onChange={searchByName} type="text" placeholder="name" />
      <input onChange={searchByTel} type="text" placeholder="telefon" /> */}
      <table border={1} style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Telefon</th>
            <th>Age</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((std) => {
            return (
              <tr key={std.id}>
                <td>{std.id}</td>
                <td>{std.name}</td>
                <td>{std.phone}</td>
                <td>{std.age}</td>
                <td>{std.department}</td>
                <td style={{color: "tomato", cursor: "pointer"}} onClick={()=>onDelete(std.id)}>Delete</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default memo(Table);
