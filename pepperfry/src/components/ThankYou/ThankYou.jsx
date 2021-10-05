import "./Thank.css";

import img from "./ORDER.png";
import { useContext } from "react";
import { LoginContext } from "../../context/loginContext";
import {useHistory} from "react-router-dom"

export default function ThankYou() {
  const history = useHistory()
  const {login} = useContext(LoginContext);

  setTimeout(()=>{
    history.push("/order")
  },[3000])

  return (
    <>
      <img style={{width:"80vw"}} src={img} className="thank" alt="no" />
      <div className="transact">Transaction Id : {login ? login : "9856743e9ol"}</div>
    </>
  );
}
