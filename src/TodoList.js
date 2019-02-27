import React, { Component } from "react";
import TodoItems from "./TodoItems";				/* Import TodoItems component */
import "./style/TodoList.css";						/* Import stylesheet */

/* This class renders an input box that allows the user to enter an item which is added to the TodoItems component. */

class TodoList extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			items: []			/* Array of items */
		};
		
		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);				/* Initialize functions */
	}

	
	/* Function to add a new item to the list */
	addItem(e) {
		/* Retrieve the items from state */
		var itemArray = this.state.items;
		
		/* Check that the input text is not empty (using ref to access element) */
		if(this._inputElement.value !== "") {
			/* Prepend a new item to array containing the input text and a unique key  */
			itemArray.unshift({
				text: this._inputElement.value,
				key: Date.now()
			});
			
			/* Update the state */
			this.setState({
				items: itemArray
			})
			
			/* Reset the input text */
			this._inputElement.value = "";
		}
		
		/* Stop the page from reloading */
		e.preventDefault();
	}
	
	/* Function that returns the item to be deleted */
	deleteItem(key) {
		/* Filter the item to return all items that are not equal to the key parameter */
		var filteredItems = this.state.items.filter(function(item) {
			return (item.key !== key);
		});
		
		/* Update state */
		this.setState({
			items: filteredItems
		});
	}
	
	render() {
		return (
			<div className="todoListMain">
				<div className="header">
				{/*  Render a form with an input box which uses ref to retrieve its value.
					 The form calls the addItem() function when submitted */}
					<form onSubmit={ this.addItem }>
						<input ref={ (a) => this._inputElement = a } placeholder="enter task" />
						<button type="submit">add</button>
					</form>
				</div>
				
				{/* Render the TodoItems component passing in the items as one prop and the item 
					returned by deleteItem() as another prop */}
				<TodoItems entries={ this.state.items } delete={ this.deleteItem } />
			</div>
		);
	}
}

export default TodoList;