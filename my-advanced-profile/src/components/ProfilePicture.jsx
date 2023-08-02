import React from 'react';
import './ProfilePicture.css';

function ProfilePicture(props) {
  return (
    <div className="profile_picture">
      <img src={props.userPhoto}></img>
    </div>
    // <img src={profilei}></img>
  );
}

export default ProfilePicture;
