import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
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

	//在组建即将被挂在到页面的时刻自动执行
	// componenWillMount() {}

	//在组建被挂载到页面后继续执行
	// componentDidMount() {}

	//组建被更前前，自动执行， return true 更新， false 不更新
	// shouldComponentUpdate() {}


	componentWillUpdate() {}

	// 
	// componentDidiUpdate(){}

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
						ref={(input) => {this.input = input} }
					/>
					<button onClick={this.handleBtnClick}>Submit</button>
				</div>
				<ul ref={(ul) => this.ul = ul}>
					{this.getTodoItem()}
				</ul>
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

	handleInputChange() {
		const value = this.input.value
		this.setState(() =>({
				inputValue: value
		}))
	}

	handleBtnClick() {
		this.setState((prevState) => ({
			list: [...prevState.list, prevState.inputValue],
			inputValue: ""
		}), () => {
			console.log(this.ul.querySelectorAll('div').length)
		})

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