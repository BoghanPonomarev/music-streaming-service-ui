import * as actionType from "../constants/actionType";

const initialState = {token: ''};

// reducer token
export default (state = initialState, action = {}) => {
    if (action.type === actionType.SET_TOKEN) {
        const newState = Object.assign({}, state);
        newState.token = action.token;
        return newState;
    }
    return state;
};