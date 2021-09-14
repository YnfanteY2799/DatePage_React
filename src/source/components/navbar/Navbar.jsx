import React from 'react';
import { Link } from "react-router-dom";

let Navbar = ({title = "", InitialOptions = [], EndingOptions = []}) =>
<nav className="navbar navbar-expand navbar-dark bg-dark flex-column flex-md-row bd-navbar">
    <Link className="navbar-brand" to="/" style={{marginLeft:"1rem"}}>{title}</Link>
    <div className="navbar-nav-scroll">
        <ul className="navbar-nav bd-navbar-nav flex-row">
            {InitialOptions.map(({name, to}, index) => 
                <li key={index} className="nav-item nav-link" >
                    <Link to={to} className="nav-item nav-link">{name}</Link>
                </li>
            )}
        </ul>
    </div>
</nav>;

export { Navbar };