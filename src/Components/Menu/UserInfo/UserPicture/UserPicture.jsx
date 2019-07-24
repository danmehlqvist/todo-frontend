import React from 'react'
import PropTypes from 'prop-types'
import './UserPicture.scss';

const UserPicture = props => {

    const imgSizeInPixels = 60;
    const imgUrl = encodeURI(`https://robohash.org/${props.userName}.png?size=${imgSizeInPixels}x${imgSizeInPixels}`);

    return (
        <div className="UserPicture" onClick={props.onClick}>
            {props.userName === null ?
                (
                    <div className="QuestionMark"> <span>?</span> </div>
                ) : (
                    <img
                        src={imgUrl}
                        alt="Profile"
                        
                    />
                )
            }
        </div>
    )
}

UserPicture.propTypes = {
    userName: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default UserPicture
