import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import RoomContextProvider from './components/context/roomContext';
import UserContextProvider from './components/context/userContext';

import './index.css';
import App from './app';

ReactDOM.render(
	<Router>
		<RoomContextProvider>
			<UserContextProvider>
				<App />
			</UserContextProvider>
		</RoomContextProvider>
	</Router>,
	document.getElementById('root')
);
