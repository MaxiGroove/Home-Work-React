import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../../pages/main/main';
import Archive from '../../pages/archive/archive';
import Form from '../../pages/form/form';
import { AppRoute } from '../../const';
import PageNotFound from '../../pages/page-not-found-404/page-not-found-404';

const App = ({ events }) => {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact>
          <Main events={events} />
        </Route>

        <Route path={AppRoute.ARCHIVE} exact>
          <Archive events={events} />
        </Route>

        <Route path={AppRoute.EVENT}>
          <Form events={events} />
        </Route>
        
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;