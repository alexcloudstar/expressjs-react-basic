import React from 'react';
import styled from 'styled-components';

const NavbarEl = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  h1 {
    color: #625df5;
    font-size: 20px;
    font-weight: 600;
  }
`;

const RegisterLinks = styled.div`
  a {
    color: #625df5;
    font-size: 20px;
    font-weight: 600;
    margin: 0 10px;
  }
`;

export const Navbar = () => {
  return (
    <>
      <NavbarEl>
        <Logo>
          <h1>Express JS - React Basic App</h1>
        </Logo>
        <RegisterLinks>
          <a href='/register'>Register</a>
          <a href='/login'>Login</a>
        </RegisterLinks>
      </NavbarEl>
    </>
  );
};
