import React,{useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Info=()=>{
    const [users,setUser]=useState([]);
    useEffect(()=>{
        console.log("hi");
        loadUsers();
         
        
        
    },[]);
    const loadUsers= async ()=>{
        const result = await axios.get("http://localhost:3003/users");
        await setUser(result.data.reverse());
        console.log(users);
        // return result;
    }
    const deleteUser= async(id)=>{
        await axios.delete(`https://my-json-server.typicode.com/CoderOnTheRoad/react-admin-app/users/${id}`);
        loadUsers();
    }
    return (

        <table className="table table-dark text-center">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">UserName</th>
        <th scope="col">Email</th>
        <th scope="col">Action</th>

        </tr>
    </thead>
  <tbody>
    {
        users.map((user,index)=>(
            <tr>
                <th scope="row">{index+1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                    <Link class="btn btn-primary m-2" to={`/user/${user.id}`}>View</Link>
                    <Link class="btn btn-warning m-2" to={`/user/edit/${user.id}`}>Edit</Link>
                    <a class="btn btn-danger m-2" onClick={()=>{deleteUser(user.id)}}>Delete</a>
                </td>
            </tr>

        ))
    }

  </tbody>
</table>
    );
};

export default Info;
