import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";						/* import stylesheet */
import TodoList from "./TodoList";				/* import TodoList component */

/* use DOM to select the div with the id "container" */
var destination = document.querySelector("#container");

/* use ReactDOM to render the TodoList component to the container div */
ReactDOM.render(<div><TodoList /></div>, destination);