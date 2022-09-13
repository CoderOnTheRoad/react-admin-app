import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Input=()=>{
    let navigate=useNavigate();
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:"",

    })
    const onInputChange=e=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("https://my-json-server.typicode.com/CoderOnTheRoad/react-admin-app/users",user)
        navigate("/info");
    }
    return (
        <div>
            <div>Add User</div>
            <form onSubmit={e=>{onSubmit(e)}}>
            <input class="form-control" type="text" placeholder="Name" aria-label="default input example" name="name" value={user.name} onChange={e=>{onInputChange(e)}}/>
            <input class="form-control" type="text" placeholder="Username" aria-label="default input example" name="username" value={user.username} onChange={e=>{onInputChange(e)}}/>
            <input class="form-control" type="text" placeholder="Email" aria-label="default input example" name="email" value={user.email} onChange={e=>{onInputChange(e)}}/>
            <input class="form-control" type="phone" placeholder="Phone Number" aria-label="default input example"name="phone" value={user.phone} onChange={e=>{onInputChange(e)}}/>
            <input class="form-control" type="text" placeholder="Website" aria-label="default input example" name="website" value={user.website} onChange={e=>{onInputChange(e)}}/>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
        

    );
};

export default Input;