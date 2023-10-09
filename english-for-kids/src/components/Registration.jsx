import React from 'react';
import Form from './Form';
import { getAuth } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { userStateActions } from '../store/user-slice';

function Registration() {
  const dispatch = useDispatch();
  const RegistrationHandler = ({ email, password }) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('userCredential', userCredential);
        const payload = {
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          token: userCredential.user.accessToken,
        };
        dispatch(userStateActions.setUser(payload));
      })
      .catch(console.error);
  };

  const buttonTitle = 'Зарегистрироваться';
  return (
    <>
      <div>Registration</div>
      <Form button={buttonTitle} onClickHandler={RegistrationHandler} />
    </>
  );
}

export default Registration;
