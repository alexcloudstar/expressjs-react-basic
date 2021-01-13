import React from 'react';
import styled from 'styled-components';

const LoginDiv = styled.div``;

const Login = () => {
  return (
    <>
      <LoginDiv>
        <form action=''>
          <input type='email' name='email' />
          <input type='password' name='password' />
        </form>
      </LoginDiv>
    </>
  );
};
