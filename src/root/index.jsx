// eslint-disable-next-line no-unused-vars
import { useCallback, useMemo, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Table from "../components/Table";

export const Root = () => {
  // let [state, setState] = useState(0);

  const title = useRef(null);

  let onPlus = () => {
    // setState(state + 1)
  }


  let onMinus = () => {
    // setState(state - 1)
  }

  console.log('Root render');
  
  const onSubmit = () => {
    console.log("submit", title.current.value);
    
  }



  return (
    <div>
      <Navbar />
      <Table />

      {/* <h1>{state}</h1> */}
      <button onClick={onPlus}>Plus</button>
      <button onClick={onMinus}>Minus</button>
      <input ref={title} type="text" />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default Root;