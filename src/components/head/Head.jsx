import React from 'react'

import {useNavigate} from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
import './head.css'
export default function Head() {
    const navigate = useNavigate();

    const logoutSubmit = (e) => {
      e.preventDefault();
      axios.post('/api/logout').then(res => {
         if (res.data.status === 200) {
            localStorage.removeItem('auth_token');
            localStorage.removeItem('auth_name');
            swal("Success" , res.data.message , "success" );
            navigate('/login');
         }
      })
    }
    var authLogout =  '';
    if(localStorage.getItem('auth_token')){
        authLogout =  (
            <button className='' onClick={logoutSubmit}> Logout </button>
        )
    }
    return (
        <div className="head bg-white p-15 between-flex">
            <div className="search p-relative">
                <input className="p-10" type="search" placeholder="Rechercher" />
                {authLogout}
            </div>
            <div className="icons d-flex align-center">
                <span className="notification p-relative">
                    <i className="fa-regular fa-bell fa-lg"></i>
                </span>
                <img src="imgs/avatar.png" alt="" />
            </div>
        </div>
    )
}
