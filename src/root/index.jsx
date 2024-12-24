import { useState } from "react";
import { students } from "../mock/students";
import { Container, MenuItem, SubItem } from "./style";

export const Root = () => {
  const [data, setData] = useState(students);

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
  return (
    <div>
      <h1>Students List</h1>
      <input onChange={searchByName} type="text" placeholder="name" />
      <input onChange={searchByTel} type="text" placeholder="telefon" />
      <table border={1} style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Telefon</th>
            <th>Age</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {data.map((std) => {
            return (
              <tr key={std.id}>
                <td>{std.id}</td>
                <td>{std.name}</td>
                <td>{std.phone}</td>
                <td>{std.age}</td>
                <td>{std.department}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* {data.map(([title, list]) => {
        return (
          <Container key={title}>
            <MenuItem>{title}</MenuItem>
            {list.map((lst) => {
              return (
                <SubItem key={lst}>
                  <input type="checkbox" checked={lst.status} />
                  <span>{lst.status ? "Active" : "In Active"}</span>
                  <span>{lst.title}</span>
                </SubItem>
              );
            })}
          </Container>
        );
      })} */}
    </div>
  );
};

export default Root;
