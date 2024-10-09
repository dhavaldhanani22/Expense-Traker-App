import React from 'react';

const ViewExpense = (props) => {
	return (
		<>
			<span>Budget: £{props.budget}</span>
			<button type='button' class='btn btn-primary' onClick={props.handleEditClick}>
				Edit
			</button>
		</>
	);
};

export default ViewExpense;
