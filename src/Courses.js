import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const Courses = () =>(
	<Query query={gql`
	{
	allCorses {
		userId
		id
		title
		body
		}
	}
`}>
	{({loading, error, data}) =>{
		if(loading) return <p>Loading ...</p>;
		if(error) return <p>Error :(</p>;
		  return data.allCourses.map(({userId, id, title, body}) =>(
		  	<div key={id}>
		  		<p>{`${title} by ${id}`}</p>
		  	</div> 
		  ));
	}}
</Query>	
);

export default Courses; 
