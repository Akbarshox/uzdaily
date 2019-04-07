import React from 'react';
import Layout from './Layout';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';
 

export default class Navigation extends React.Component {
	state = {
		sideDrawerOpen: false
	}
	DrawerToggleClickHandler = () =>{
		this.setState((prevState)=>{	
			return {sideDrawerOpen: !prevState.sideDrawerOpen};			
		});
	};
	backdropClickHandler = () =>{
		this.setState({sideDrawerOpen: false});
	}
  render() {
  	let backdrop;
  	if (this.state.sideDrawerOpen) {
  		backdrop = <Backdrop click={this.backdropClickHandler} />;
  	};
    return (
      <div className="App" style={{height: '100%'}}>
      	<Layout drawerClickHandler = {this.DrawerToggleClickHandler} />
      	<SideDrawer show={this.state.sideDrawerOpen} />
      	{backdrop}
      </div>
    );
  }
}