import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	render() {
		const {content, test} = this.props
		return (
			<div 
				onClick={this.handleClick}>{test}-{content}
			</div>
		)
	}

	handleClick() {
		const {deleteItem, index } = this.props;
		deleteItem(index)
	}
}

TodoItem.propTypes = {
	content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	deleteItem: PropTypes.func,
	index: PropTypes.number,
}

TodoItem.defaultProps = {
	test: 'hello'
}

export default TodoItem;