import React from 'react';
import ProfilePicture from './ProfilePicture';
import ProfileBio from './ProfileBio';
import ProfileName from './ProfileName';
import ProfileCitation from './ProfileCitation';
import ProfileHobbies from './ProfileHobbies';
import Counter from './Counter';

function Profile(props) {
  return (
    <>
      <ProfileName userName={props.userData.userName} />
      <ProfilePicture userPhoto={props.userData.userPhoto} />
      <ProfileBio textBio={props.userData.textBio} />
      <ProfileCitation textCitation={props.userData.textCitation} />
      <ProfileHobbies userHobbies={props.userData.userHobbies} />
      <Counter />
    </>
  );
}

export default Profile;
