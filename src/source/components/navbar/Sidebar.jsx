import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => 
<nav className="col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky">
        <ul className="nav flex-column">
            <li className="nav-item">
                <Link>A</Link>
            </li>
        </ul>
    </div>
</nav>
;

export { Sidebar };