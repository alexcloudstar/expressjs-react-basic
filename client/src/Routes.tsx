import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from 'pages/home';
import { SinglePost } from 'components/Feed/SinglePost';
import { Login } from 'pages/Auth/login';
import { Register } from 'pages/Auth/register';

const Routes = () => {
  return (
    <div className='Routes'>
      <main className='main'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/post/:postId' component={SinglePost} />
          <Route path='/posts/page/:number' component={Login} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </main>
    </div>
  );
};

export default Routes;
