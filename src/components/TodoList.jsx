import React from 'react';
import Todo from './Todo'

export default class TodoList extends React.Component {

	state = {
		todos : [
			{
				id:1,
				task:'This is a task',
				completed:false
			},
			{
				id:2,
				task:'This is a another task',
				completed:false
			},
			{
				id:3,
				task:'This is a common task',
				completed:false
			}
		]
	};

	handleDelete = (todoId) =>{
		let todos = this.state.todos.filter((todo)=>{return todo.id!==todoId})
		this.setState({todos});

		
	};

	render() {
		return (
			<div className="card px-3">
				<div className="card-body">
				  <h4 className="card-title">Awesome Todo list</h4>
				  <div className="add-items d-flex"> <input type="text" className="form-control todo-list-input" placeholder="What do you need to do today?"/> <button className="add btn btn-primary font-weight-bold todo-list-add-btn">Add</button> </div>
				  <div className="list-wrapper">
				      <ul className="d-flex flex-column-reverse todo-list">
				         {
				          	this.state.todos.map(todo => 
				          		<Todo todo={todo} handleDelete={this.handleDelete} key={todo.id}/>
				          	)
				        }
				      </ul>
				  </div>
				</div>
			</div>
		);
	}
}
