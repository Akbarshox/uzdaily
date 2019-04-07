import React from 'react';
import '../sass/Backdrop.css'

const Backdrop = props =>(
	<div className="backdrop" onClick={props.click} />
)
export default Backdrop;