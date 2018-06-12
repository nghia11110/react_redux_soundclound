import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import SoundCloud from 'soundcloud';
import { Router, Route, IndexRoute } from 'react-router';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import { configureStore } from './store';
import { CLIENT_ID, REDIRECT_URI } from './config';
import routes from './routes';
import App from './components/App/';
import TrackList from './components/TrackList/';
import Callback from './components/Callback/';

SoundCloud.initialize({
  client_id: CLIENT_ID,
  redirect_uri: REDIRECT_URI
});

const store = configureStore();
const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} >
      <div component={App}>
        <Route exact path="/" component={TrackList} />
        <Route path="/callback" component={Callback} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();