import React from 'react';
import {Switch, Route} from 'react-router';
import * as routes from 'app/constants/routes';
import Player from 'app/components/pages/player';
import HomeLayout from 'app/components/pages/home';
import AdminStreamsList from 'app/components/pages/adminStreamsList';
import AdminStreamPage from 'app/components/pages/adminStreamPage';

export default () => (
    <Switch>
        <Route exact path={routes.index()} component={HomeLayout}/>
        <Route exact path={routes.home()} component={HomeLayout}/>
        <Route exact path={routes.play()} component={Player}/>
        <Route exact path={routes.adminStreamList()} component={AdminStreamsList}/>
        <Route exact path={routes.adminStreamPage()} component={AdminStreamPage}/>
    </Switch>
);