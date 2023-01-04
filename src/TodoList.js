import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import Test from './Test';
import "./style.css";

class TodoList extends Component {

	constructor(props) {
		super(props);
		//当组件的state/props发生改变时， render就好从新执行
		this.state = {
			inputValue: "",
			list: []
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleBtnClick = this.handleBtnClick.bind(this)
		this.hadnleItemDelete = this.hadnleItemDelete.bind(this)
	}

	render() {
		return (
			<Fragment>
				<div>
					<label htmlFor="insertArea">Input:</label>
					<input 
						id="insertArea"
						className="input"
						value={this.state.inputValue}
						onChange={this.handleInputChange}
					/>
					<button onClick={this.handleBtnClick}>Submit</button>
				</div>
				<ul>
					{this.getTodoItem()}
				</ul>
				<Test content={this.state.inputValue}/>
			</Fragment>
			
		)
	}

	getTodoItem() {
		return this.state.list.map((item, index) => {
							return (
								<TodoItem 
									key={index}
									content={item} 
									index={index}
									deleteItem={this.hadnleItemDelete}
								/>
							)
						})	
	}

	handleInputChange(e) {
		const value = e.target.value
		this.setState(() =>({
				inputValue: value
		}))
	}

	handleBtnClick() {
		this.setState((prevState) => ({
			list: [...prevState.list, prevState.inputValue],
			inputValue: ""
		}))
	}

	hadnleItemDelete(index) {
		this.setState((prevState)=> {
				const list = [...prevState.list]
				list.splice(index, 1)
				return {list}
		})
	}
}

export default TodoList;