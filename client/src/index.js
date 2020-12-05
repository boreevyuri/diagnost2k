import ReactDOM from 'react-dom';
import React, { Suspense } from 'react';
import App from './App.js';
import './utills/i18next';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<Suspense fallback={<div>Loading...</div>}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Suspense>,
	document.getElementById('root')
);
