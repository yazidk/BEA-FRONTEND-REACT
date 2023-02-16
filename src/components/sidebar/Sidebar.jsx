import React from 'react'
import { Link } from 'react-router-dom';
import './sidebar.css';

export default function Sidebar() {
    return (
        <div className="sidebar bg-white p-20 p-relative">
            <h3 className="p-relative txt-c mt-0">BEA</h3>
            <ul>
                <li>
                    <Link className="active d-flex align-center fs-14 c-black rad-6 p-10" to={'/'}>
                        <i className="fa-regular fa-chart-bar fa-fw"></i>
                        <span>Tableau de bord</span>
                    </Link>
                </li>
                <li>
                    <Link className="d-flex align-center fs-14 c-black rad-6 p-10" to={'/ajouter-fiche'}>
                        <i className="fa-regular fa-file fa-fw"></i>
                        <span>Ajouter Fiche</span>
                    </Link>
                </li>
                <li>
                    <Link className="d-flex align-center fs-14 c-black rad-6 p-10" to={'/search-fiche-compte'}>
                        <i className="fa-regular fa-file fa-fw"></i>
                        <span>Rechercher Fiche</span>
                    </Link>
                </li>
                <li>
                    <a className="d-flex align-center fs-14 c-black rad-6 p-10" href="settings.html">
                        <i className="fa-solid fa-gear fa-fw"></i>
                        <span>Paramatres</span>
                    </a>
                </li>
                <li>
                    <a className="d-flex align-center fs-14 c-black rad-6 p-10" href="profile.html">
                        <i className="fa-regular fa-user fa-fw"></i>
                        <span>Profile</span>
                    </a>
                </li>
              
             
                <li>
                    <a className="d-flex align-center fs-14 c-black rad-6 p-10" href="friends.html">
                        <i className="fa-regular fa-circle-user fa-fw"></i>
                        <span>Utilisateurs</span>
                    </a>
                </li>
               
              
            </ul>
        </div>
    )
}
