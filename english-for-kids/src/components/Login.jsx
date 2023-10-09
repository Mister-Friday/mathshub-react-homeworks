import React from 'react';
import Form from './Form';
import { getAuth } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { userStateActions } from '../store/user-slice';
import { useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const LoginHandler = ({ email, password }) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const uid = userCredential.user.uid;
        const email = userCredential.user.email;
        const token = userCredential.user.accessToken;
        dispatch(userStateActions.setUser(uid, email, token));
        navigate('/');
      })
      .catch(console.error);
  };

  const buttonTitle = 'Войти';
  return (
    <>
      <div>Login</div>
      <Form button={buttonTitle} onClickHandler={LoginHandler} />
    </>
  );
}

export default Login;
