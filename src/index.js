import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import SoundCloud from 'soundcloud';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import { configureStore } from './store';
import { CLIENT_ID, REDIRECT_URI } from './config';
import createRoutes from './routes';
import * as actions from './actions';

SoundCloud.initialize({
  client_id: CLIENT_ID,
  redirect_uri: REDIRECT_URI
});

const tracks = [
  {
    title: 'Some track'
  },
  {
    title: 'Some other track'
  }
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));
const history = syncHistoryWithStore(createBrowserHistory(), store);
const routes = createRoutes();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
