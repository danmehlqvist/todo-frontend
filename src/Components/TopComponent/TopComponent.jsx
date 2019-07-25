import React from 'react'
import './TopComponent.scss';
import settings from '../../settings';
import {handleResponse} from '../../helpers';


import Menu from '../Menu/Menu';
import TodosPage from '../TodosPage/TodosPage';



class TopComponent extends React.Component {

    state = {
        userName: "Dan Mehlqvist",
        todos: [],
        isLoading: true,
    }

    //================================================================================================
    // Lifecycle methods

    render() {
        return (
            <div className="TopComponent">
                <Menu
                    userName={this.state.userName}
                />
                {this.state.isLoading ? (
                    <div className="Loading todos">Loading</div>
                ) : (
                        <TodosPage
                            todos={this.state.todos}
                            updateTodo={this.updateTodo}
                        />
                    )
                }

            </div>
        )
    }

    //------------------------------------------------------------------------------------------------

    componentDidMount = () => {
        fetch(settings.apiURI + '/todos')
            .then(handleResponse)
            .then(res => res.json())
            .then(res => res.map(x => ({...x, isLoading:false})))
            .then(res => {
                this.setState({
                    todos: res,
                    isLoading: false,
                })
            })
            .catch(error => {
                console.log('Nu gick det åt skogen ' + error);
            })

    }

    //================================================================================================
    // Event handlers

    updateTodo = updatedTodo => {
        const indexOfTodo = this.state.todos.findIndex(x => x.id === updatedTodo.id);
        const newTodos = [
            ...this.state.todos,
        ];
        updatedTodo.isLoading = true;
        newTodos[indexOfTodo] = updatedTodo;
        this.setState({
            todos: newTodos
        }, () => {
            // console.log(`The TODO with ID ${updatedTodo.id} will be updated in database!`);
            // console.log('Nu har vi satt flaggan isLoading på todon');
            fetch(settings.apiURI + '/todos',
                {
                    method: 'PUT',
                    body: JSON.stringify(updatedTodo),
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    },
                })
                .then(handleResponse)
                // .then(res => res.isLoading===false)
                .then(res => res.json())
                .then(res =>{
                    res.isLoading= false;
                    newTodos[indexOfTodo] = res;
                    // console.log("res: ");
                    // console.log(res);
                    this.setState({
                        todos: newTodos,
                    })
                })
                    
                
                .catch(error => console.log('Error in updateTodo: ' + error))
        });


       
    }
}

export default TopComponent;