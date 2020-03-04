import React from 'react';
import {Switch, Route} from 'react-router';
import * as routes from 'app/constants/routes';
import HomeLayout from 'app/components/pages/home';
import Player from 'app/components/pages/play';

export default () => (
    <Switch>
        <Route exact path={routes.index()} component={HomeLayout}/>
        <Route exact path={routes.home()} component={HomeLayout}/>
        <Route exact path={routes.play()} component={Player}/>
    </Switch>
);