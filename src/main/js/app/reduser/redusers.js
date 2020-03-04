import {combineReducers} from 'redux';

import {reducer} from 'app/reduser/reduser';
import localeReduser from 'app/reduser/localeReduser';

export const reducers = combineReducers({
    state: reducer,
    intl: localeReduser,
});