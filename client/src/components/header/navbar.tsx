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
    a {
      color: #625df5;
      font-size: 20px;
      font-weight: 600;
      text-decoration: none;
    }
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
          <h1>
            <a href='/'>Express JS - React Basic App</a>
          </h1>
        </Logo>
        <RegisterLinks>
          <a href='/register'>Register</a>
          <a href='/login'>Login</a>
        </RegisterLinks>
      </NavbarEl>
    </>
  );
};
