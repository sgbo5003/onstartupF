import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const SET_ALLREFRESH = '@@onstartup/refresh/SET_ALLREFRESH';

export const setAllRefresh = createAction(SET_ALLREFRESH);

const initial_refresh = Map({
    allRefresh: 0,
});

export default handleActions({
    [SET_ALLREFRESH]: (state, action) => state.set('allRefresh', action.payload),
}, initial_refresh)