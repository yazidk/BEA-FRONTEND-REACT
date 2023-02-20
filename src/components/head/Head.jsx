import React from 'react'
import { Link } from 'react-router-dom';
import './head.css'
export default function Head() {
     
    var autLogout  = '' ;
    if(localStorage.getItem('auth_token')){
        autLogout = (
            <button> Logout</button>
        )
    }
    return (
        <div className="head bg-white p-15 between-flex">
            <div className="search p-relative">
                <input className="p-10" type="search" placeholder="Rechercher" />
                {autLogout}
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
