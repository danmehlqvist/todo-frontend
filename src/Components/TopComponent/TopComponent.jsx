import React from 'react'
import './TopComponent.scss';
import settings from '../../settings';


import Menu from '../Menu/Menu';
import TodosPage from '../TodosPage/TodosPage';


class TopComponent extends React.Component {

    state = {
        userName: "Dan Mehlqvist",
        todos: [],
        isLoading: true,
    }

    render() {

        console.log(this.state);

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
                        />
                    )
                }

            </div>
        )
    }

    componentDidMount = () => {
        const fakeDbTodos = [
            {
                id: 1,
                title: 'FAKE första',
                description: 'första description',
                isFinished: true,
            },
            {
                id: 2,
                title: 'FAKE Andra',
                description: 'Den andra beskrivningen',
                isFinished: false,
            }
        ]


        setTimeout(() => {
            this.setState({
                todos: fakeDbTodos,
                isLoading: false,
            })
        }, settings.fakeLoadingDelay);
    }
}

export default TopComponent;