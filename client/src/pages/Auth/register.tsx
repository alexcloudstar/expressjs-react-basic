import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';

// redux
import { useDispatch } from 'react-redux';
import { signupAction } from 'store/actions/auth/signupAction';

const RegisterDiv = styled.div``;

export const Register = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch();

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const data = new FormData();

    data.append('email', email);
    data.append('name', name);
    data.append('password', password);

    dispatch(signupAction(data));
  };

  return (
    <>
      <RegisterDiv>
        <h1>Register</h1>
        <form id='register-user-form' onSubmit={submitHandler}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Your email address'
          />
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='Enter your name'
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='Enter your password'
          />
          <button type='submit'>Register</button>
        </form>
      </RegisterDiv>
    </>
  );
};
