
import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link, useNavigate,useParams } from "react-router-dom";

const User=()=>{
    let navigate=useNavigate();
    const {id}=useParams();
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:"",

    });
    useEffect(()=>{
        loadUser();
    },[]);
    const loadUser=async ()=>{
        const result= await axios.get("http://localhost:3003/users/"+id);
         setUser(result.data);
         // navigate("/info");
     }
    return(
        <div className="card">
            <Link className="btn btn-primary" to="/">Home</Link>
        <div className="card-header">
            User Id: {id}
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Name: {user.name}</li>
            <li className="list-group-item">UserName: {user.username}</li>
            <li className="list-group-item">Email: {user.email}</li>
            <li className="list-group-item">Phone: {user.phone}</li>
            <li className="list-group-item">Website: {user.website}</li>
        </ul>
        </div>
    );

}
export default User;