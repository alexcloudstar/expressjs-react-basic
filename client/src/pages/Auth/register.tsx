import React from 'react';
import styled from 'styled-components';

const RegisterDiv = styled.div``;

export const Register = () => {
  return (
    <>
      <RegisterDiv>
        <h1>Register</h1>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' />
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' id='name' />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' />
        <button type='submit'>Login</button>
      </RegisterDiv>
    </>
  );
};
