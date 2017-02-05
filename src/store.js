//Redux & Routing imports
import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//My root reducer
import  rootReducer from './reducers/root';

//Model Data
import { contacts, callHistory } from './model';

//Default State
const defaultState = {
    contacts,
    callHistory
};

//Redux DevTools stuff
const enchancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f=>f
);

//Store
const store = createStore(rootReducer, defaultState, enchancers);

//History
export const history = syncHistoryWithStore(browserHistory, store);

export default store;