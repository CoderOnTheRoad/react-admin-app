import React from "react";
import "../../../src/Sidebar.css";
import { Link } from "react-router-dom";
const Sidebar=()=>{
    return (
        <nav className="navbar  sidebar text-center ">
            <div className="container-fluid flex flex-column justify-content-between align-items-center h-6">
            <Link className="btn btn-dark col-8 mb-2" to="/info">
                All Users
            </Link>
            <Link className="btn btn-dark col-8 mb-2" to="/user">
                Create User
            </Link>

            </div>
        </nav>
    );
};

export default Sidebar;