import { useCallback, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Table from "../components/Table";

export const Root = () => {
  let [state, setState] = useState(0);

  let onPlus = () => {
    setState(state + 1)
  }

  let onMinus = () => {
    setState(state - 1)
  }

  console.log('Root render');
  
  const title = {name: "Khumoyun"};

  const memoTitle = useMemo(() => {
    return title
  }, []);

  const TitleCallback = useCallback((props) => {
    return {...title, props}
  }, []);


  return (
    <div>
      <Navbar title={TitleCallback} mem ={memoTitle} />
      <Table title='Rustamov' />

      <h1>{state}</h1>
      <button onClick={onPlus}>Plus</button>
      <button onClick={onMinus}>Minus</button>
      
    </div>
  );
};

export default Root;