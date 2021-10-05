import {createContext,useState} from "react";


const LoginContext = createContext({});

function LoginProvider({children}){
    const [login , setLogin] = useState("6156b5a6ff17ae025803738e");
    const [add,setAdd] = useState("");
    const [disP,setDisP] = useState("")
    const [oriP,setOriP] = useState("")

    const [name,setName] = useState("")
    
    return <LoginContext.Provider value={{login,setLogin,add,setAdd,name,setName,oriP,setOriP,disP,setDisP}}>{children}</LoginContext.Provider>
}

export {LoginContext,LoginProvider}