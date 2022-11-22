import React, {useState } from "react"
import {useDispatch} from "react-redux"
import saveData from "../state/Action"

const Index = () =>{
    const[data,setdata]=useState({name:"",email:"",password:""});
    
    const onchange = (e) =>{
        setdata({...data,[e.target.name]:e.target.value})
    }

    const dispatch = useDispatch();
    // const record = useSelector((state)=>state.saveReducer)
    // console.log("saveReducer", record)

    return(

        <>
            <form>

                <input type="text" onChange={onchange} name="name"/><br/>
                <input type="email" onChange={onchange} name="email"/><br/>
                <input type="password" onChange={onchange} name="password"/><br/>
                <button onClick={(event)=>{event.preventDefault();dispatch(saveData(data))}}>Submit</button>
                
            </form>
        </>
    )
}

export default Index