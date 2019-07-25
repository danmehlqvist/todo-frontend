import React from 'react'
import PropTypes from 'prop-types'
import './TodosPage.scss';
import TodosListing from './TodosListing/TodosListing';

const TodosPage = props => {
   
    return (
        <main className="TodosPage">
            <TodosListing 
                todos = {props.todos}
                updateTodo = {props.updateTodo}
            />
        </main>
    )
}

TodosPage.propTypes = {
    todos:PropTypes.array,
    updateTodo: PropTypes.func.isRequired,
}

export default TodosPage
