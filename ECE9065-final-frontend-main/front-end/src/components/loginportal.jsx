import React, {useState}  from 'react';
import { NavLink } from 'react-router-dom'; // 14.6K (gzipped: 5.2 K)

import { login } from "../api/user";


function LoginPortal({Logining, error}){


    const [details, setDetails] = useState({email:"", password:""});

    const submitHandler = err =>{
        err.preventDefault();
        Logining(details);

        const handelLogin = () => {
            login({email:details.email,password:details.password})
              .then((res) => {
                console.log(res.data.data);
                alert("Login Successfully")
                localStorage.setItem("token", res.data.data)

              })
              .catch((error) => {
                console.log(error)
                alert("Login Failed")
            }
                );
            };
      
          handelLogin();
        
    }

    return(
        <div className='normal_form'>  
            <form onSubmit={submitHandler}>
                <label>User Email:
                <input id="email" type="text" name="email" onChange={err => setDetails({...details, email: err.target.value})} value ={details.email}/>
                </label>
                <label> Password:
                <input id="password" type="text" name="password" onChange={err => setDetails({...details, password: err.target.value})} value ={details.password}/>
                </label>
                <input type="submit" value="login" />
            </form>
        
        </div>
    )
}
export default LoginPortal;