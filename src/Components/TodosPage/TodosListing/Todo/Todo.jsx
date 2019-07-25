import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Todo.scss';

import Spinner from '../../../Spinner/Spinner';


const Todo = props => {

    const {todo} = props;

    const [displayDetails, changeDisplayDetails] = useState(false);
 
    const checkboxStyle = {
        color: todo.isFinished ? "green" : "#ccc",
    }

    const checkboxClickHandler = () => {
        // todo.isLoading=true;
        // console.log('isFinished: '+todo.isFinished )
        const updatedTodo = {
            ...todo,
        }
        updatedTodo.isFinished = !todo.isFinished;
        // console.log(todo.isFinished);
        // console.log(updatedTodo);

        // console.log(updatedTodo);
        // console.log('isFinished: '+updatedTodo.isFinished);
        props.updateTodo(updatedTodo);
    }


    // if (todo.isLoading) {
    //     console.log('loading...');
    // }
    // else {
    //     console.log('not loading anymore...')
    // }

    return (
        <div className="Todo">

            <div className="Checkbox" style={checkboxStyle} onClick={checkboxClickHandler}>
                {/* { !todo.isLoading && <span>&#10004;</span> } */}
                { todo.isLoading ? <Spinner size="small" color="#666" /> :<span>&#10004;</span>}
            </div>


                <div
                    className="Text"
                    onClick={() => {
                        changeDisplayDetails(!displayDetails);
                    }}
                >

                    {displayDetails ? (
                        <div className="Details">
                            DETAILS
                </div>
                    ) : (
                            <div className="Header">

                                <span>{props.todo.title}</span>
                            </div>
                        )
                    }

                </div>


        </div >
    )
}


Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    updateTodo: PropTypes.func.isRequired,
}

export default Todo
