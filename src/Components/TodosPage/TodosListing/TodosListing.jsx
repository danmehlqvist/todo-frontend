import React from 'react'
import PropTypes from 'prop-types'
import './TodosListing.scss';
import Todo from './Todo/Todo';

const TodosListing = props => {
    return (
        <div className="TodosListing">
            {props.todos.map(todo =>
                // <div className="Todo" >
                    <Todo
                        todo={todo}
                        key={todo.id}
                    />
                // </div>
            )}


        </div>
    )
}

TodosListing.propTypes = {
    todos: PropTypes.array,
}

export default TodosListing
