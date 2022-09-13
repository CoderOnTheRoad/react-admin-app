import React,{useState,useEffect} from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";

const EditUser=()=>{
    let navigate=useNavigate();
    const {id}=useParams();
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:"",

    })
    const loadUser=async ()=>{
       const result= await axios.get("http://localhost:3003/users/"+id);
        setUser(result.data);
        // navigate("/info");
    }
    useEffect(()=>{
        loadUser();
    },[]);
    const onInputChange=e=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.put("http://localhost:3003/users/"+id,user);
        navigate("/info");
    }
    return (
        <div>
            <h2>Add User</h2>
            <div className="flex flex-column justify-content-center align-items-center">
                <form onSubmit={e=>{onSubmit(e)}} >
                <input class="form-control" type="text" placeholder="Name" aria-label="default input example" name="name" value={user.name} onChange={e=>{onInputChange(e)}}/>
                <input class="form-control" type="text" placeholder="Username" aria-label="default input example" name="username" value={user.username} onChange={e=>{onInputChange(e)}}/>
                <input class="form-control" type="text" placeholder="Email" aria-label="default input example" name="email" value={user.email} onChange={e=>{onInputChange(e)}}/>
                <input class="form-control" type="phone" placeholder="Phone Number" aria-label="default input example"name="phone" value={user.phone} onChange={e=>{onInputChange(e)}}/>
                <input class="form-control" type="text" placeholder="Website" aria-label="default input example" name="website" value={user.website} onChange={e=>{onInputChange(e)}}/>
                <button type="submit" class="btn btn-warning col-12 ">Update</button>
                </form>
            </div>

        </div>
        

    );
};

export default EditUser;