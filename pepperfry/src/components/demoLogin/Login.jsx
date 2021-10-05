import {Row, Col} from "react-bootstrap";
import axios from "axios";
import {useState,useContext} from "react"
import { LoginContext } from "../../context/loginContext";



function Signup () {

     const {login,setLogin} = useContext(LoginContext);

     const [obj, setObj] = useState({})

     function handleInput (e) {
          const {name,value} = e.target
          setObj({
               ...obj,
               [name]:value
          })
     }

     async function handleSubmit () {
          const {data} = axios.post(`http://localhost:4321/signup`, obj);
          setLogin(data);
          console.log(login)
     }

     return <div>
               <input  onChange={handleInput}type="text" placeholder="lastname" name="last_name" />
               <input  onChange={handleInput}type="text" placeholder="firstname" name="first_name" />
               <input  onChange={handleInput}type="text" placeholder="email" name="email"  />
               <input  onChange={handleInput}type="text" placeholder="password" name="password"   />
          <input onChange={handleInput} type="text" placeholder="mobile" name="mobile" />
          <button onClick={handleSubmit}>Signup</button>
     </div>
}

function Login(){
     const [obj, setObj] = useState({})

     function handleInput (e) {
          const {name,value} = e.target
          setObj({
               ...obj,
               [name]:value
          })
     }

     async function handleSubmit () {
          const {data} = await axios.post(`http://localhost:4321/login`, obj);
          console.log(data)
     }

     return (<div>
          <input  onChange={handleInput}type="text" placeholder="email" name="email"  />
          <input  onChange={handleInput}type="text" placeholder="password" name="password"   />
          <button onClick={handleSubmit}>Login</button>
     </div>)
}

export {Signup,Login}