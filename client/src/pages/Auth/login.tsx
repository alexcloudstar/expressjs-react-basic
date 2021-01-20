import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';

// redux
import { useDispatch } from 'react-redux';
import { loginAction } from 'store/actions/auth/loginAction';

const LoginDiv = styled.div``;

export const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch();

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const data = new FormData();

    data.append('email', email);
    data.append('password', password);

    dispatch(loginAction(data));
  };

  return (
    <>
      <LoginDiv>
        <h1>Login</h1>
        <form id='login-user-form' onSubmit={submitHandler}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={'Please enter your email'}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='Enter your password'
          />
          <button type='submit'>Login</button>
        </form>
      </LoginDiv>
    </>
  );
};
