import { useReducer, useState } from "react";
// import { students } from "../mock/students";
// import Navbar from "../components/Navbar";
// import Table from "../components/Table";

export const Root = () => {
  // const [data, setData] = useState(students);

  const [count, setCount] = useState(0)
  const [cnt, dispatch] = useReducer((state, action) => {

    switch (action.type) {
      case "plus":
        return state + 1;
      case "minus":
        return state - 1;
      case "amount":
        return state + action.payload;
      default:
        return state;
    }
    
  }, 1)

  // let onDelete = (id) => {
  //   console.log(id);
  //   let res = data.filter((innerData) => innerData.id !== id);
  //   setData(res);
  // }

  let plus =  () => {
    setCount(count + 1)
  }

  let minus =  () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <h1>CNT: {cnt}</h1>
      <button onClick={() => dispatch({type: "plus"})}>Dispatch plus</button>
      <button onClick={() => dispatch({type: "minus"})}>Dispatch minus</button>
      <button onClick={() => dispatch({type: "amount", payload: count})}>
        {count}
      </button>
      <br />
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button> 

      {/* <Navbar length={data.length} />
      <Table data={data} onDelete={onDelete} />
      */}
      
    </div>
  );
};

export default Root;
