import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Dashboard from './components/Dashboard/Dashboard';
import Economy from './components/Dashboard/Economy';
import Layout from './components/Navigation/Layout';
import Footer from './components/Dashboard/Footer';
import './components/sass/style.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
		<BrowserRouter>
			<div className="Layout">
			  <Navigation />
			  <Switch>
			  	<Route exact path='/' component={Dashboard} />
				<Route path='/Economy' component={Economy} />
			  </Switch>
			  <Footer />
			</div>
		</BrowserRouter>
    );
  }
}
  			  	// <Route path='/login' component={} />
  			  	// <Route path='/signup' component={} />