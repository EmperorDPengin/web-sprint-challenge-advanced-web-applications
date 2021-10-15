import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import styled from 'styled-components';

import Header from './Header';
import LambdaHeader from './LambdaHeader';
import View from './View';
import Login from './Login';
import Logout from './Logout';

const App = () => {
  return (
    <AppContainer>
      <LambdaHeader/>
      <Header/>
      <RouteContainer>
        <Switch>
          <PrivateRoute exact path="/view" component={View} />
          <PrivateRoute exact path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route exact patch="/">
            <Redirect to="/login" />
          </Route>
        </Switch>    
      </RouteContainer>
    </AppContainer>
  )
}

export default App;

//Task List
//x1. Create and import PrivateRoute component.
//x2. Create a Route for Login pointing to '/login.'
//x3. Create a PrivateRoute for View component point to '/view.'
//x4. Create a PrivateRoute for Logout component pointing to '/logout.'


const AppContainer = styled.div`
  height: 100%;
`
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`
