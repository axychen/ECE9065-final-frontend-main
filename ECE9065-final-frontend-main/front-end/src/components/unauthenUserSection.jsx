import React, {useState} from 'react'
import UnauthenUserPortal from './unauSearchInput'
import UnauthenUserPortal2 from './unauSearchResult'

function UnauthenUserSection(){
    // const [inputs, setInputs] = useState("");
    //const [user,setUser] =  useState({inputArtist:"", inputBand:"",inputGenre:"", inputTrackTitle:""});
    const [errors, setError]= useState(""); 
    const Searching = details => {
        console.log(details)
    }
    const SortingResult = sortdetails => {
        console.log(sortdetails)
    }
    
    return (
        <div className='normal_form'>
            
            {/* <UnauthenUserPortal Searching={Searching} error ={errors} /> */}
            <UnauthenUserPortal2 SortingResult={SortingResult} error ={errors}/>
        </div>
    )
 }
export default UnauthenUserSection;