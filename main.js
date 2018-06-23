import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './lib/App';
import connectedApp from './lib/redux-app';
Promise.resolve().then(e =>
{
	const app = connectedApp(App);
	render(app, document.body.appendChild(document.createElement('div')));
	app.runSaga();
});