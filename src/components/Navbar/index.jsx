/* eslint-disable react/prop-types */

import { Wrapper, MenuItem } from "./style";
import { UserContext } from "../../contex/user";
import { memo } from "react";

export const Navbar = (props) => {
    const [val] = UserContext();

    console.log('Navbar render');
    console.log('Callback', props.title("Rustamov"));
    console.log("Memo", props.mem.name);
    

  return (
   <Wrapper>
    <MenuItem length={val?.length}>Home</MenuItem>
    <MenuItem>Login</MenuItem>
    <MenuItem>Reset</MenuItem>
    <MenuItem>Info: {val?.length}</MenuItem>
   </Wrapper>
  );
};

export default memo(Navbar);
