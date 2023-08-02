import React from 'react';
import './ProfileHobbies.css';

function ProfileHobbies(props) {
  return (
    <div className="profile_hobbies">
      <section>
        <h3>Хобби:</h3>
        <ul>
          {props.userHobbies.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        {/* <ul>
          <li>{props.userHobbies[0]}</li>
          <li>{props.userHobbies[1]}</li>
          <li>{props.userHobbies[2]}</li>
        </ul> */}
      </section>
    </div>
  );
}

// const arr = [1,2,3]

// arr.map((item) => {
//   <li>{item}</li>
// })

export default ProfileHobbies;
