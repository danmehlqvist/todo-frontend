import React, { useState } from 'react';
import './UserInfo.scss';
import PropTypes from 'prop-types'

import UserPicture from './UserPicture/UserPicture';



const UserInfo = props => {

    const [displayDropDown, changeDropDownDisplay] = useState(false);

    const style = {
        // display: displayDropDown ? 'inherit' : 'none',
        maxHeight: displayDropDown ? '120px' : '0',
    }

    const profilePictureClickHandler = e => {
        changeDropDownDisplay(!displayDropDown);
    }

    return (
        <div className="UserInfo">
            <div className="AlwaysVisible">


                <div className="UserPicture">
                    <UserPicture
                        userName={props.userName}
                        onClick={profilePictureClickHandler}
                    />
                </div>

                <div className="UserName">
                    {props.userName}
                </div>
            </div>

            <div className="SometimesVisible" style={style}>
                {props.userName === null ? (
                    <div className="UserInfoLinks">
                        <ul>
                            <li>Login</li>
                            <li>Sign Up</li>
                        </ul>
                    </div>
                ) : (
                    <div className="UserInfoLinks">
                        <ul>
                            <li>Logout</li>
                        </ul>
                    </div>
                    )
                }

            </div>

        </div>
    )




}

UserInfo.propTypes = {
    userName: PropTypes.string,
}

export default UserInfo
