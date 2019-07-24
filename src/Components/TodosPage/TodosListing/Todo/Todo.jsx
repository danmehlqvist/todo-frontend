import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Todo.scss';


const Todo = props => {

    const [displayDetails, changeDisplayDetails] = useState(false);
    const [isFinished, changeIsFinished] = useState(props.todo.isFinished)



    const checkboxStyle = {
        color: isFinished ? "green" : "#ccc",
    }

    const checkboxClickHandler = e => {
        changeIsFinished(!isFinished);
    }


    return (
        <div className="Todo">

            <div className="Checkbox" style={checkboxStyle} onClick={checkboxClickHandler}>
                <span>&#10004;</span>
            </div>

            {/* <div class="TextContainer"> */}
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
            {/* </div> */}

        </div >
    )
}


Todo.propTypes = {
    todo: PropTypes.object.isRequired,
}

export default Todo
