import { useState } from "react";
import { students } from "../mock/students";
import Navbar from "../components/Navbar";
import Table from "../components/Table";

export const Root = () => {
  const [data, setData] = useState(students);

  let onDelete = (id) => {
    console.log(id);
    let res = data.filter((innerData) => innerData.id !== id);
    setData(res);
  }

  return (
    <div>
      <Navbar length={data.length} />
      <Table data={data} onDelete={onDelete} />
      
    </div>
  );
};

export default Root;
