import React, {Component} from 'react';
import '../sass/index.scss';
import DrawerToggleButton from './DrawerToggleButton';
import {Link, NavLink} from 'react-router-dom';

const toolbar = props =>(
	<header className="toolbar">
		<nav className="toolbar_navigation">
			<div>
				<DrawerToggleButton click={props.drawerClickHandler} />
			</div>
			<div></div>
			<div className="toolbar_logo"><Link to ="/">UZ Daily</Link></div>
			<div className="spacer"></div>
			<div className="toolbar_navigation_item">
				<ul>
				 <li><Link to="/economy">Economy</Link></li>
		    	 <li><Link to="/culture">Culture</Link></li>
		    	 <li><Link to="/sport">Sport</Link></li>
		    	 <li><Link to="/tourism">Tourism</Link></li>
				 <li><input class="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Search"></input></li>
				</ul>
			</div>
		</nav>
	</header>
	);
export default toolbar;

// 		<nav class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
// <div class="container">

//   <a class="navbar-brand" href="https://mdbootstrap.com/docs/jquery/" target="_blank">
//     <strong>UZ DAILY</strong>
//   </a>

//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
//     aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navbarSupportedContent">

//     <ul class="navbar-nav mr-auto">
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Узбекистан
//           <span class="sr-only">(current)</span>
//         </a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#" target="_blank">Экономика</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#" target="_blank">Финансы</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#" target="_blank">Технология</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#" target="_blank">Маркет</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#" target="_blank">Культура</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#" target="_blank">Спорт</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#" target="_blank">Туризм</a>
//       </li>
//     </ul>

//     <ul class="navbar-nav nav-flex-icons">  
//       <li class="nav-item">
//         <input class="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Search"></input>
//       </li>
//       <li class="nav-item dropdown">
//         <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown09" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="flag-icon flag-icon-us"> </span>Русский</a>
//         <div class="dropdown-menu" aria-labelledby="dropdown09">
//             <a class="dropdown-item" href="#fr"><span class="flag-icon flag-icon-fr"> </span>Узбекский</a>
//             <a class="dropdown-item" href="#ru"><span class="flag-icon flag-icon-ru"> </span>Английский</a>
//         </div>
//       </li>
//     </ul>

//   </div>

// </div>
// </nav>