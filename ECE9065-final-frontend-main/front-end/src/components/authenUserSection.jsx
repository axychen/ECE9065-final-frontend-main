import React, {useState} from 'react'
import CreateList from './createlist'
import ShowLists from './aushowlists'

function AuthenUserSection(){
    const [errors, setError]= useState(""); 
    const [loginState,setLoginState] = useState(""); 

    const Creating = details => {
        console.log(details)
    }
    return (
        <div className='normal_form' >
            <CreateList Creating={Creating} error ={errors} />
            <div className= "showLists">
                {<ShowLists />}
            </div>
        </div>
    )
 }

export default AuthenUserSection;