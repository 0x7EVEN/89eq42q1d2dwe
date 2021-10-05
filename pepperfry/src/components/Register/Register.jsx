import { RegisterContext } from "../Contexts/RegisterContext";
import { useState, useContext } from "react";
import Modal from "./Modal";
import "./Register.css";

export default function Register() {
  const [token, handleLogin, handleLogout] = useContext(RegisterContext);
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };

  return token ? (
    <div className="pop_up">
      <button onClick={handleModal}>LOGIN/REGISTER</button>
      <p>To access your account & manage orders</p>
      <Modal modal={modal} handleModal={handleModal} />
    </div>
  ) : null;
}
