import React from 'react';
import ReactDOM from 'react-dom';
//App data binder
import App from './components/App';

//Components for nav and initial view
import Contacts from './components/Contacts';
import NewMessage from './components/NewMessage';
import CallHistory from './components/History';
import NewContact from './components/NewContact';

//Routing imports
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, {history} from './store';

//Router setup
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Contacts}></IndexRoute>
        <Route path="/new-message" component={NewMessage}></Route>
        <Route path="/new-message/:name" component={NewMessage}></Route>
        <Route path="/history" component={CallHistory}></Route>
        <Route path="/new-contact" component={NewContact}></Route>
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
  router,
  document.getElementById('root')
);
