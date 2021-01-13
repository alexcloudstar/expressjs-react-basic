import React from 'react';
import styled from 'styled-components';

const LoginDiv = styled.div``;

export const Login = () => {
  return (
    <>
      <LoginDiv>
        <h1>Login</h1>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' />
        <button type='submit'>Login</button>
      </LoginDiv>
    </>
  );
};
