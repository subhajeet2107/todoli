import React from 'react';
import { MdClose } from 'react-icons/md';

export default class Todo extends React.Component {

	render() {
		return (
			<div>
				<li>
		            <div className="form-check">
		            	<label className="form-check-label">
		            		<input className="checkbox" type="checkbox" /> { this.props.todo.task } <i className="input-helper"></i>
		            	</label>
		            </div>
		            
		            <i className="remove" onClick={() => this.props.handleDelete(this.props.todo.id)}><MdClose/></i>
		        </li>
			</div>
		);
	}
}
