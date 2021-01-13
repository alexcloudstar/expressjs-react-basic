import React from 'react';
import styled from 'styled-components';

const RegisterDiv = styled.div``;

const Register = () => {
  return (
    <>
      <RegisterDiv>
        <form action=''>
          <input type='email' name='email' />
          <input type='text' name='name' />
          <input type='password' name='password' />
        </form>
      </RegisterDiv>
    </>
  );
};
