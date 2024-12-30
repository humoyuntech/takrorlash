/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Wrapper, MenuItem } from "./style";
import { UserContext } from "../../contex/user";
import { HRContext } from "../../contex/hr";

export const Navbar = (props) => {
    const val = useContext(UserContext);
    const hrval =useContext(HRContext)
    console.log(val);
    console.log(hrval);
    

  return (
   <Wrapper>
    <MenuItem>Home</MenuItem>
    <MenuItem>Login</MenuItem>
    <MenuItem>Reset</MenuItem>
    <MenuItem>Info {props?.length}</MenuItem>
   </Wrapper>
  );
};

export default Navbar;
