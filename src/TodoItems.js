import React, { Component } from "react";
import FlipMove from "react-flip-move";				/* For transition effects */

/* This class is responsible for storing all of the list items */

class TodoItems extends Component {
	
	constructor(props) {
		super();		
		this.createTasks = this.createTasks.bind(this);
		this.delete = this.delete.bind(this);
	}
	
	/* Function that creates a new task for the todo list */
	createTasks(item) {
		return <li onClick={ ()=> this.delete(item.key) } key={ item.key }>{ item.text }</li>
	}
	
	/* Function that removes the selected key and its task from the props */
	delete(key) {
		this.props.delete(key);
	}
	
	render() {
		/* Get the entries prop and store as variable */
		var todoEntries = this.props.entries;
		
		/* For each entry, call the createTasks() function to add a list item */
		var listItems = todoEntries.map(this.createTasks);
		
		/* Return a list containing each item. FlipMove creates a transition effect when an item is added or removed */
		return(
			<ul className="theList">
				<FlipMove duration={ 2000 } easing="ease-out">
					{ listItems }
				</FlipMove>
			</ul>
		);
	}
}

export default TodoItems;