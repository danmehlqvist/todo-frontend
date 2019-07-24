import React from 'react'
import PropTypes from 'prop-types'
import './TodosPage.scss';
import TodosListing from './TodosListing/TodosListing';

const TodosPage = props => {
    return (
        <main className="TodosPage">
            <TodosListing 
                todos = {props.todos}
            />
        </main>
    )
}

TodosPage.propTypes = {
    todos:PropTypes.array,
}

export default TodosPage
