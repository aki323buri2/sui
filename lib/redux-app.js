import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSaga from 'redux-saga';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import reducers from './reducers';
import mainSaga from './mainSaga';
global.debug = true;
export const connectedApp = App =>
{
	const saga = createSaga();
	const logger = createLogger({
		predicate: (getState, action) => global.debug, 
	});
	const store = createStore(combineReducers(reducers), applyMiddleware(saga, logger));
	const app = <Provider store={store}><App/></Provider>;
	return {
		...app, 
		runSaga: () => saga.run(mainSaga), 
	};
};
export default connectedApp;