import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from 'pages/home';
import { Login } from 'pages/login';
import { Register } from 'pages/register';

const Routes = () => {
  return (
    <div className='Routes'>
      <main className='main'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </main>
    </div>
  );
};

export default Routes;
