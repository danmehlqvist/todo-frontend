import React from 'react'
import PropTypes from 'prop-types'
import './Menu.scss';
import UserInfo from './UserInfo/UserInfo';

const Menu = props => {
    return (
        <nav className="Menu">
            <div className="Header">
                Dan's Super-duper TodoApp
            </div>
            <UserInfo 
                userName={props.userName}
            />
            
        </nav>
    )
}

Menu.propTypes = {
    userName: PropTypes.string,
}

export default Menu
