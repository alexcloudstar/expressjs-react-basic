import React, { FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from 'store/actions/auth/loginAction';
import { RootState } from 'store';

const LoginDiv = styled.div`
  padding: 0 12rem 2rem 12rem;
`;

const StyledButton = styled.button`
  margin-top: 2rem;
`;

export const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const loginData = useSelector((state: RootState) => state.loginReducer.data);

  const dispatch = useDispatch();

  useEffect(() => {
    loginData && localStorage.setItem('token', loginData.token);
    loginData && localStorage.setItem('userId', loginData.userId);
  }, [loginData]);

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
          <div className='input-holder'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={'Please enter your email'}
            />
          </div>
          <div className='input-holder'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder='Enter your password'
            />
          </div>
          <StyledButton type='submit'>Login</StyledButton>
        </form>
      </LoginDiv>
    </>
  );
};
