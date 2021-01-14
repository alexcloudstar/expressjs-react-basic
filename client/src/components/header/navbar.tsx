import React from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.div`
  height: 100%;
  padding: 0.5rem 10rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #2e2e2e;
`;

const Logo = styled.div`
  h1 {
    a {
      color: #625df5;
      font-size: 20px;
      font-weight: 600;
      text-decoration: none;
      margin: 0 2.5rem;
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
      <NavbarWrapper>
        <Logo>
          <h1>
            <a href='/'>Express JS - React Basic App</a>
          </h1>
        </Logo>
        <RegisterLinks>
          <a href='/register'>Register</a>
          <a href='/login'>Login</a>
        </RegisterLinks>
      </NavbarWrapper>
    </>
  );
};
