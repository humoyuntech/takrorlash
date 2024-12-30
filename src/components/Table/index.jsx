// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { students } from "../../mock/students";


export const Table = ({data, onDelete}) => {


  const searchByName = ({ target: { value } }) => {
    let res = students.filter((student) => student.name.includes(value));
    setData(res);
  };

  const searchByTel = ({ target: { value } }) => {
    let res = students.filter((student) =>
      student.phone.split(" ").join("").includes(value)
    );
    setData(res);
  };

  const mainStyle = {
    color: "tomato",
    cursor: "pointer"
  }

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
                <td onClick={() => onDelete(std.id)} style={mainStyle}>Delete</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
