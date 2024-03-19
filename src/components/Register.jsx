import { useState } from "react";
import { useNavigate } from "react-router-dom"

// This page includes the way to register

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
}


const [userInfo, setUserInfo] = useState({});

const handleChange = (e) =>(
    const target = e.target
    const name = target.name
    const password = target.password
    setUserInfo((prevValue) =>{return(...prevValue, [name]:value)})


function handleSubmit(e){
  e.preventDefault()
  console.log(userInfo
  

  setToken("")

}

return (
 <>
<form onSubmit={()=>{handleSubmit()}}>
<label>





</label>
<input onClick={handletype="submit" value = "Submit"/>

</form>


</>
)
export default Register;
