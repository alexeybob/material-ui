import React, { FC, Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import DataTableSample from './DataTable';
import Page404 from './Page404';

const PATH_NAMESPACE = '';

const Routes: FC = () => {
  return (
    <Suspense fallback="">
      <Switch>
        <Route path={`${PATH_NAMESPACE}/`} exact component={Homepage} />

        <Route path="/samples/data-table" component={DataTableSample} />

        <Route path={`${PATH_NAMESPACE}/404`} component={Page404} />

        <Redirect to={`${PATH_NAMESPACE}/404`} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
