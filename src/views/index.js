import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Videos from './pages/Videos';
import ROUTES from '../routes';
import MainLayout from '../layouts/Main';
const Views = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={ROUTES.VIDEOS()}
          render={(props) => <MainLayout component={Videos} {...props} />}
        />
        <Redirect from="*" to={ROUTES.VIDEOS()} />
      </Switch>
    </BrowserRouter>
  );
};

export default Views;
