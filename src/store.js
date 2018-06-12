import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
// import { browserHistory } from 'react-router';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const logger = createLogger();
const router = routerMiddleware(createBrowserHistory());

const createStoreWithMiddleware = applyMiddleware(thunk, router, logger)(createStore);

export function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}