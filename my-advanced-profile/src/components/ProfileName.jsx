import React from 'react';
import './ProfileName.css';

function ProfileName(props) {
  console.log(props);
  return (
    <div className="profile_name">
      <p>{props.userName}</p>
    </div>
    // <h2>Иван Мохов</h2>
  );
}

export default ProfileName;
