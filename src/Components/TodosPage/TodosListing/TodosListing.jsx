import React from 'react'
import PropTypes from 'prop-types'
import './TodosListing.scss';
import Todo from './Todo/Todo';

const TodosListing = props => {
    // props.todos.forEach(x => console.log(x.id));
    return (
        <div className="TodosListing">
            {props.todos.map(todo =>
                    <Todo
                        todo={todo}
                        key={todo.id}
                        updateTodo={props.updateTodo}
                    />
            )}


        </div>
    )
}

TodosListing.propTypes = {
    todos: PropTypes.array,
    updateTodo: PropTypes.func.isRequired,
}

export default TodosListing
