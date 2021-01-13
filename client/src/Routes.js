import React from 'react';

import { Switch, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <div className='Routes'>
      <main className='main'>
        <Switch>
          <Route exact path='/bored' component={''} />
          <Route path='/activity' component={''} />
        </Switch>
      </main>
    </div>
  );
};

export default Routes;
