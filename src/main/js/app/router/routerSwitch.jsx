import React from 'react';
import {Switch, Route} from 'react-router';
import * as routes from 'app/constants/routes';
import StreamPage from 'app/components/pages/streamPage';
import StreamListLayout from 'app/components/pages/streamList';
import AdminStreamsList from 'app/components/pages/adminStreamsList';
import AdminStreamPage from 'app/components/pages/adminStreamPage'
import AdminLogin from 'app/components/pages/adminLogin';

export default () => (
    <Switch>
        <Route exact path={routes.index()} component={StreamListLayout}/>
        <Route exact path={routes.play()} component={StreamPage}/>
        <Route exact path={routes.adminStreamList()} component={AdminStreamsList}/>
        <Route exact path={routes.adminStreamPage()} component={AdminStreamPage}/>
        <Route exact path={routes.adminLoginPage()} component={AdminLogin}/>

        <Route component={StreamListLayout}/>
    </Switch>
);