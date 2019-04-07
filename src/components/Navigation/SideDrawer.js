import React from 'react';
import '../sass/SideDrawer.css';
import {Link, NavLink} from 'react-router-dom';

const SideDrawer = props => {
    	let drawerClasses = 'side-drawer';
    	if (props.show) {
    		drawerClasses = 'side-drawer open'
    	};
    return(
	<nav className={drawerClasses}>
        <div className="row">
    	<ul>
             <li><Link to="/economy">Economy</Link></li>
             <li><Link to="/culture">Culture</Link></li>
             <li><Link to="/sport">Sport</Link></li>
             <li><Link to="/tourism">Tourism</Link></li>
             <li><input class="form-control input-sm" type="search" placeholder="Поиск" aria-label="Search"></input></li>
    	</ul>
        </div>
    </nav>
    )
};

export default SideDrawer;