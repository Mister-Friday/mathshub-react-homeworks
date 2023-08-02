import React from 'react';
import './ProfileBio.css';

function ProfileBio(props) {
  return <div className="profile_bio">{props.textBio}</div>;
}

export default ProfileBio;
